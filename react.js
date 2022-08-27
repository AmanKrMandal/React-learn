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


/================== Form ==========================================

import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
  return (
    <div className="App">
     <h1>Handle Form in React</h1>
    
     <form onSubmit={getFormData}>
       <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>Select Options</option>
         <option>Marvel</option>
         <option>DC</option>
       </select> <br /><br />
       <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
       <br /><br />
       <button type="submit">Submit</button>
       <button>Clear</button>
     </form>

    </div>
  );
}
export default App;







































































































