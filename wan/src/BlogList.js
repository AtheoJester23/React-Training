import { Link } from "react-router-dom";

const BlogList = ({ data, handleDelete }) => {
    return (  
        <div>
            {data.map((blog)=>
                <div key={blog.id} className="p-4 m-4 border shadow d-flex flex-column justify-content-center align-items-center">
                    <Link to={`/blogs/${blog.id}`}className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <h2>{blog.title}</h2>
                        <p className="lead">{blog.author}</p>
                    </Link>

                    <button onClick={()=>handleDelete(blog.id)} className="btn btn-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
 
export default BlogList;