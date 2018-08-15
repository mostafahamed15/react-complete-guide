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
      componentWillReceiveProps(nextProps){
          console.log('[Update persons.js] inside componentWillReceiveProps()', nextProps);
      }

      shouldComponentUpdate(nextProps, nextState){
          console.log('[Update persons.js] inside shouldComponentUpdate()', nextProps, nextState);
          return nextProps.persons !== this.props.persons;
      }

      componentWillUpdate(nextProps, nextState){
        console.log('[Update persons.js] inside componentWillUpdate()', nextProps, nextState);
      }
      componentDidUpdate(){
        console.log('[Update persons.js] inside componentDidUpdate()');
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
