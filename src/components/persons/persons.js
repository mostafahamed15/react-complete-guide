import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
    constructor(props){
        super(props);
        console.log('[persons.js] inside constructor', props);
       
      }
    
      componentWillMount(){
        console.log('[persons.js] inside component will mount()');
      }
    
      componentDidMount(){
        console.log('[persons.js] inside componentDidMount()');
      }
    state = {  }
    render() { 
        console.log('[persons.js] inside rendrer()');
        return this.props.persons.map((person, index) => {
                return (
                
                <Person 
                click={() => this.props.clicked(index)}
                changed = {(event) => this.props.changed(event, person.id)}
                name = {person.name}
                age = {person.age} 
                key = {person.id}
               />
               
            )}); 
        
    }
}
 
export default Persons ;
