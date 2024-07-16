import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Someone");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const all = { title, author, body };
    setPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(all),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Title: </label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Someone">Someone</option>
          <option value="Someone2">Someone2</option>
          <option value="Someone3">Someone3</option>
        </select>

        {!pending && <button className="btn btn-success">Submit</button>}
        {pending && (
          <button disabled className="btn btn-danger">
            Wait lang...
          </button>
        )}

        <div className="border">
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{author}</p>
        </div>
      </form>
    </div>
  );
};

export default Create;
