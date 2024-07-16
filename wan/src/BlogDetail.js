import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, loading, err } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDel = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="p-5">
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {data && (
        <div>
          <h2 className="display-2">{data.title}</h2>
          <p className="lead">{data.body}</p>

          <button onClick={handleDel} className="btn btn-danger">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
