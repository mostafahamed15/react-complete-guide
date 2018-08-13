import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person:[
    {id: 'ldjl' ,name : 'Mostafa' , age: 20},
    {id: 'ldjd' ,name : 'Mohammed' , age: 15},
    {id: 'ldjc' ,name : 'Marwam' , age: 28}
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
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({person: persons});
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
       { this.state.person.map((person, index) => {
         return <Person 
         click={() => this.deletePersonHandler(index)}
         name = {person.name}
         age = {person.age} 
         key = {person.id}/>
       })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1> Hi, I am react app </h1>
        <p>This is really working </p>
        <button
        style = {style}
        onClick = {this.togglePersonHandler}> Switch Person </button>
       
      {persons}
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default App;
