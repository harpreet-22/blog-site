import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

/* 
Babel(Transpiler) converts JSX into HTML 
Component is a function with return value generally JSX Component
We can't output booleans and objects formed using JS
*/

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = "https://www.google.com";
  return (
    <Router>
      <div className="App">
        {/* <h1>{ title }</h1>
            <p>Liked { likes } times</p>
            <a href = "https://www.google.com"> Google </a>
            <a href = { link }> Google </a> */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">  
              <Home />
            </Route>
            {/* React switch will go from top to bottom and exact keyword is for the exact route match.
            If we don't add exact '/' & '/create' is a match for react. */}
            <Route path = "/create">
              <Create />
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
