import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    
    /* This second argument is dependency array of useEffect, if variables in this array changes then 
    useEffect will run on re-render. 
    useEffect can't be declared as async coz we can't attach weights to it */

    // const [name, setName] = useState('mario');

    /* useEffect(() => { // useEffect runs on every render so we put the code we want to run on every render
        console.log('useEffect ran');
        console.log(name);
    }, [name]); 
    /* This second argument is dependency array of useEffect, if variables in this array changes then 
    useEffect will run on re-render. */

    // let name = 'mario';
    // const [name, setName] = useState('mario'); // to make name variable rective so react re-render if changed
    // const [age, setAge] = useState('25');

    // const handleClick = (e) => {
    //     setName('system hang');
    //     setAge(16);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log(name + ' SYSTUUMM', e);
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>} 
            {/* Error handling */}

            {isLoading && <div> Loading... </div>}
            {/* Loading message */}

            {blogs && <BlogList blogs = {blogs} title = 'All Blogs!'/>}
            {/* This blogs && BlogList is conditional templating in react, if blogs is null than right not run. */}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!"/>   */}
            {/* Here BlogList component is reused which shows only the blogs from mario */}
            {/* Here we will use props(blogs is a prop here) to pass the blogs data to BlogList component.
            Props(properties) are to used to pass data b/w components from parent to child component
            We can also pass funtions as prop like handleDelete */}


            {/* <p>{name}</p> */}
            {/* <button onClick={()=>setName('system')}>click me</button> */}
            
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('Elvish', e)}>Click me again</button>  */}
            {/* if we want to pass an argument
             e here refers to event object of funciton which have the details of event */}
            
        </div>
    );
}
 
export default Home;