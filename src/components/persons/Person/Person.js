import React, { Component } from 'react';
import classes from './person.css';
class Person  extends Component {
    constructor(props){
        super(props);
        console.log('[person.js] inside constructor', props);
       
      }
    
      componentWillMount(){
        console.log('[person.js] inside component will mount()');
      }
    
      componentDidMount(){
        console.log('[person.js] inside componentDidMount()');
      }
    state = {  }
    render() { 
        console.log('[person.js] inside render()');
        return (  
        
                <div className = {classes.Person} >
            <p onClick = {this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old .</p>
            <p > {this.props.children} </p>
            <input type = 'text' onChange = {this.props.changed} value = {this.props.name} />
            {/* value = {props.name} donot work i donot know why make it */}
            </div>
        
        );
    }
}
 
export default Person ;

