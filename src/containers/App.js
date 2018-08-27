import React, { PureComponent } from 'react';
import Persons from '../components/persons/persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/cockpit';
import aux from '../hoc/AuxM';
import withClass from '../hoc/withClass';



class App extends PureComponent {

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
    showPersons: false,
    toggleClicked: false
  };
  }

  componentWillMount(){
    console.log('[app.js] inside component will mount()');
  }

  componentDidMount(){
    console.log('[app.js] inside componentDidMount()');
  }
  
//   shouldComponentUpdate(nextProps, nextState){
//     console.log('[Update app.js] inside shouldComponentUpdate()', nextProps, nextState);
//     return nextState.person !== this.state.person ||
//     nextState.showPersons !== this.state.showPersons;
// }

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
this.setState((prevState, props) =>{
  return{
    showPersons: !doesShow,
    toggleClicked : prevState.toggleClicked + 1}
  
});
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
      
      <aux>
      <button
      onClick = {() => {this.setState({showPersons: true})}}>
      Show Persons</button>
     <Cockpit
     appTitle = {this.props.title}
     showPersons = {this.state.showPersons}
     persons = {this.state.person}

     clicked = {this.togglePersonHandler} />
       
      {persons}
      </aux>
      
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default withClass(App, classes.App);
