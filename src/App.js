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
nameChangedHandler = (event, id) =>{
  const personIndex = this.state.person.findIndex( p => {
    return p.id === id;
  });
  const person = {
    ...this.state.person[personIndex]
  };
  person.name = person.target.value;
  const persons = [...this.state.person];
  persons[personIndex] = person;
  this.setState({person: persons})

}
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({person: persons});
}
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
       { this.state.person.map((person, index) => {
         return <Person 
         click={() => this.deletePersonHandler(index)}
         changed = {(event) => this.nameChangedHandler(event, person.id)}
         name = {person.name}
         age = {person.age} 
         key = {person.id}/>
       })}
        </div>
      )
      style.backgroundColor = 'red';
     
    }
    const classes = [];
   if (this.state.person.length <= 2){
     classes.push('red');
   }
   if (this.state.person.length <= 1){
     classes.push('bold');
   }
    return (
      
      <div className="App">
        <h1> Hi, I am react app </h1>
        <p className = {classes.join(' ')}>This is really working </p>
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
