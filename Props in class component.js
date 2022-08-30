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
