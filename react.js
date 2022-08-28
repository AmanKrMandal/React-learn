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

/==================== useEffect =================================================================================
  
  import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}
export default App;

/======================== Child to Parent =================================================

import React from 'react'
import './App.css';
import User from './User'
function App() {
  function getName(name)
  {
    alert(name)
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}
export default App;

//User.js-------------------

 function User(props)
{
    const name="Anil Sidhu"
    return(
        <div>
            <h1>User Name is : </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;

/=================== Pure component ===========================================================

//App.js --------------------

import './App.css';
import React from 'react'
import Counter from './Counter'
class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="App">
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}
      >Update Count</button>
    </div>
  );
 }
}
export default App;

//Counter.js-----------------------

import React from 'react'
class Counter extends React.PureComponent{
    render()
    {
        console.warn("counter re-render")
        return(
            <div>
                <h1>Counter Component {this.props.count}</h1>
            </div>
        )
    }
}
export default Counter


/================== useMemo ======================================================================
  
  import './App.css';
import React, { useState } from 'react'
function App() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=React.useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
      {newApple}
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}
export default App;

/====================== Ref ===============================================

import './App.css';
import React,{createRef} from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.inputRef=createRef();
  }
  componentDidMount()
  {
    // console.warn(this.inputRef.current.value="1000")
  }
  getVal()
  {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"

  }
  render() {
    return (
      <div className="App">
        <h1>Ref in React </h1>
        <input type="text" ref={this.inputRef}  />
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );
  }
}
export default App;

/======================= useRef =========================================================

import './App.css';
import React,{useRef} from 'react'
function App() {
  let inputRef=useRef(null);
  function controlInput()
  {
  //  inputRef.current.value="abc"
  // inputRef.current.style.display="none"
  inputRef.current.focus()
  }
  return (
    <div className="App">
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );

}
export default App;

/================== forwardRef  ================================================================

//App.js

import './App.css';
import React ,{useRef} from 'react'
import User from './User'
function App() {
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="red"
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />
      <button onClick={updateInput} >Update Input Box</button>
    </div>
  );

}
export default App;

//User.js

import React,{forwardRef} from 'react'
function User(props,ref)
{
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}

export default forwardRef(User);

/================== Controlled Component ======================================================

import './App.css';
import React,{useState} from 'react'
function App() {
  const [val,setVal]=useState("")

   return (
    <div className="App">
      <h1>Controlled Component </h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
   <h1>{val}</h1>
    </div>
  );
}
export default  App;

/=============================== Uncontrolled Component ===================================================

import './App.css';
import React, { useRef } from 'react'
function App() {
  let inputRef = useRef(null)
  let inputRef2 = useRef(null)

  function submitForm(e) {
    e.preventDefault()
    console.warn("input field 1 value : ", inputRef.current.value)
    console.warn("input field 2 value : ", inputRef2.current.value)
    let input3 = document.getElementById('input3').value
    console.warn("input field 3 value : ", input3)


  }
  return (
    <div className="App">
      <h1>Uncontrolled Component </h1>
      <form onSubmit={submitForm} >
        <input ref={inputRef} type="text" /> <br /> <br />
        <input ref={inputRef2} type="text" /> <br /> <br />
        <input id="input3" type="text" /> <br /> <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;


/============================ Hight order component (HOC) ==========================================

import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />

    </div>
  );
}

function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
}

function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}
export default App;


/========================== Routing ===================================================================

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

/====================== Dynamic Routing =========================================================

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


/========================= async await API ====================================================================

 const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

return(
<div>
  -------------
  {
  users.map((item) =>{
      return (
           <div>
           //write here
           </div>
         )
     })
  }
  ---------------
</div>
)




















































































