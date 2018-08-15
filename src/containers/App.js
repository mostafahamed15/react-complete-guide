import React, { Component } from 'react';
import Persons from '../components/persons/persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/cockpit';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[app.js] inside constructor', props);
    this.state = {
      person:[
      {id: 'ldjl' ,name : 'Mostafa' , age: 20},
      {id: 'ldjd' ,name : 'Mohammed' , age: 15},
      {id: 'ldjc' ,name : 'Marwam' , age: 28}
    ],
    otherState: 'some other value',
    showPersons: false
  };
  }

  componentWillMount(){
    console.log('[app.js] inside component will mount()');
  }

  componentDidMount(){
    console.log('[app.js] inside componentDidMount()');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Update app.js] inside shouldComponentUpdate()', nextProps, nextState);
    return true;
}

componentWillUpdate(nextProps, nextState){
  console.log('[Update app.js] inside componentWillUpdate()', nextProps, nextState);
}
componentDidUpdate(){
  console.log('[Update app.js] inside componentDidUpdate()');
}
//   state = {
//     person:[
//     {id: 'ldjl' ,name : 'Mostafa' , age: 20},
//     {id: 'ldjd' ,name : 'Mohammed' , age: 15},
//     {id: 'ldjc' ,name : 'Marwam' , age: 28}
//   ],
//   otherState: 'some other value',
//   showPersons: false
// };
 
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
    console.log('[app.js] inside rendrer');
   
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
