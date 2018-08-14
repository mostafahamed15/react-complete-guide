import React, { Component } from 'react';
import Persons from '../components/persons/persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/cockpit';


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
   console.log('persons app screen: ', this.state.person);
    let persons = null;
    
    if (this.state.showPersons){
      persons = 
          <Persons
          persons = {this.state.person}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>
    
      
    
   
     
    }
    
    return (
      
      <div className={classes.App}>
     <Cockpit
     appTitle = {this.props.title}
     showPersons = {this.state.showPersons}
     persons = {this.state.person}

     clicked = {this.togglePersonHandler} />
       
      {persons}
      </div>
      
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default App;
