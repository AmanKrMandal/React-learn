//App.js------------------

import './App.css';
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function App() {
  let user=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
      <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/user/:id/:name" ><User /></Route>
      </Router>
    </div>
  );
}
export default App;

//User.js-------------------------

import {withRouter} from 'react-router-dom'
function User(props)
{
    console.warn(props)
    return(
    <div><h1>User No {props.match.params.id}</h1>
    <h1>User Name {props.match.params.name}</h1></div>

    )
}

export default withRouter(User);