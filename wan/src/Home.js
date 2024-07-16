import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data, setData, loading, err} = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) =>{
        const newBlogs = data.filter(yungBlog => yungBlog.id !== id);
        setData(newBlogs);
    }

    return (  
        <div>
            {loading && <p>Loading...</p>}
            {err && <p>{err}</p>}
            {data && <BlogList data={data} handleDelete={handleDelete} />}

        </div>
    );
}
 
export default Home;