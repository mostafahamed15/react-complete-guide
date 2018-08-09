import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person:[
    {name : 'Mostafa' , age: 20},
    {name : 'Mohammed' , age: 15},
    {name : 'Marwam' , age: 28}
  ]
}
  render() {
    return (
      <div className="App">
        <h1> Hi, I am react app </h1>
        <p>This is really working </p>
        <button> Switch Name </button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}> My hobbies: Racing</Person>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default App;
