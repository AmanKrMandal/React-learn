import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route , Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
    <Switch >
        <Route path="/" exact={true} > <Home /></Route>
        <Route path="/about" > <About /></Route>
        <Route path="*" > <Page /></Route>
    </Switch >
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}

function Page() {
  return (
    <div>
      <h1>404 page</h1>
      <p> Page not found</p>
    </div>
  )
}
export default App;
