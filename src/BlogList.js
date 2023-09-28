import { Link, useHistory } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    const history = useHistory();
    const handleDelete = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className = "blog-preview" key={blog.id}>
                {/* we have to had key property for the react to distinguish between different items of list */}
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Author : {blog.author}</p>
                        <button onClick={(e) => handleDelete(blog.id)}>Delete</button>
                    </Link>
                {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                </div> 
            ))}
        </div>
    );
}
 
export default BlogList;