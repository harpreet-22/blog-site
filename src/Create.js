import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState(''); // for dynamic variable in react
    const [body, setBody] = useState(''); // for dynamic variable in react
    const [author, setAuthor] = useState('mario'); // for dynamic variable in react
    const [isAdding, setIsAdding] = useState(false); // for dynamic variable in react
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsAdding(true);

        fetch('http://localhost:8000/blogs',{ // since this is asyn func i will return promise so then required.
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsAdding(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // ????? what other values does e event have ?
                />

                <label>Blog body :</label>
                <textarea name="" id="" cols="30" rows="10"
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Blog author :</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isAdding && <button>Add Blog</button>}
                {isAdding && <button>Adding</button>}
            </form>
        </div>
    );
}
 
export default Create;