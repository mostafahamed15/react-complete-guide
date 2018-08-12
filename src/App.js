import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person:[
    {name : 'Mostafa' , age: 20},
    {name : 'Mohammed' , age: 15},
    {name : 'Marwam' , age: 28}
  ],
  otherState: 'some other value',
  showPersons: false
};
 
togglePersonHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}
nameChangedHandler = (event) =>{
  this.setState(
    {
      person:[
        {name : 'Mostafa', age: 20},
        {name : event.target.value, age: 15},
        {name : 'Marwam' , age: 35}
      ]
    }
  )

}
switchNameHandler = (newName) => {
  //DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
  this.setState(
    {
      person:[
        {name : newName, age: 20},
        {name : 'Muhammed' , age: 15},
        {name : 'Marwam' , age: 40}
      ]
    }
  )
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <h1> Hi, I am react app </h1>
        <p>This is really working </p>
        <button
        style = {style}
        onClick = {this.togglePersonHandler}> Switch Name </button>
        { this.state.showPersons?
        <div>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name = {this.state.person[1].name}
         age = {this.state.person[1].age}
         click = {this.switchNameHandler.bind(this, 'Max!')}
        changed = {this.nameChangedHandler}> My hobbies: Racing</Person>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
        </div>: null}
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default App;
