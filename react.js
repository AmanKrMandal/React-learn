/========= CLICK EVENTS =======================================================

import logo from './logo.svg';
import './App.css';
function App() {
  let data="anil sidhu";
  function apple()
  {
  data="peter";
    alert(data);
  }
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={apple}>Click Me</button>
    </div>
  );
}
export default App;



/============== State with functional component =================================

import {useState} from 'react'
import './App.css';

function App() {
  const [data,setData]=useState(0)
  function updateData()
  {
    setData(data+1)
   
  }
  console.warn("______");
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}
export default App;


/=================== import React,{Component} from 'react' =================================================

import React,{Component} from 'react'
import './App.css';
class  App extends Component {

  constructor()
  {
    super();
    this.state={
      data:1
    }
  }
  apple()
  {
    this.setState({data:this.state.data+1})
  }
  render()
  {
    return (
      <div className="App">
       <h1>{this.state.data}</h1>
       <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
 
}
export default App;



/====================== Props with functional component ====================================================

//App.js----------

import React,{useState} from 'react'
import './App.css';
import Student from './Student'
function App() {
  const [name,setName]=useState("Anil")
  function apple()
  {
    alert("hello")
  }
  return (
    <div className="App">
     <h1>Props in React :)</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
    </div>
  );
}

export default App;


//Student.js----------

function Student(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>
        </div>
    )
}

export default Student

/======================= Props in class component ===========================
  
//App.js--------------

import './App.css';
import Student from './Student'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="anil@test.com"></Student>
       <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
      </div>
    );
  }
}

export default App;

//Student.js-----------------------

import React from 'react'

export default class Student extends React.Component{
    render()
    {
        console.log(this.props)
        return(
        <div  style={{backgroundColor:'skyblue',margin:20}}>
           <h1>Hello  {this.props.name}</h1>
        <h3>{this.props.email}</h3>
             </div>
        )
    }
}

/====================== Get Input box value =======================================

import './App.css';
import React ,{useState}from 'react'
function App() {
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}

export default App;


/===================== Conditional rendering | If Condition ===============================================

//App.js

import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
function App() {
  return (
    <div className="App">
    <Profile />
    </div>
  );
}

export default App;

//Profile.js

import { useState } from 'react'
function Profile() {
    const [loggedIn, setLoggedIn] = useState(3)
    return (
        <div>
           ? {loggedIn==1?
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )
}
export default Profile;


/====================== Basic Form validation ============================

//App.js

import './App.css';
import Login from './Login'
function App() {
  const data = true;
  return (
    <div className="App">
     <Login />
    </div>
  );
}
export default App;

//Login.js

import React, { useState } from 'react'
function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
            <br /> <br />
            <button type="submit"  >Login</button>
           </form>
        </div>
    )
}
export default Login;


/===========================  componentDidMount ============================================

import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"anil"}
  }
  componentDidMount()
  {
    console.warn("componentDidMount")
  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
      </div>
    );
  }
}
export default App;


/=================== componentDidUpdate ==============================


import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"anil"}
  }
  componentDidUpdate()
  {
    console.warn("componentDidUpdate")
  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
      </div>
    );
  }
}
export default App;


/=========================== componentWillUnmount  ======================================

//App.js-------------

import './App.css';
import React from 'react'
import Student from './Student'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show?<Student />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}
export default App;

//Student.js--------------------

import React from 'react'
class Student extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>Student Component</h1>
    }
}
export default Student


 




























































































