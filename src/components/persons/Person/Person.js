import React, { Component } from 'react';
import classes from './person.css';
import withClass from '../../../hoc/withClass';
import aux from '../../../hoc/AuxM';
import propTypes from 'prop-types';
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
        if (this.props.position === 0){
            this.inputElement.focus();
        }
       
      }
    state = {  }
    render() { 
        console.log('[person.js] inside render()');
        return (  
        
            <aux>
            <p onClick = {this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old .</p>
            <p > {this.props.children} </p>
            <input 
            ref = { (inp) =>{this.inputElement = inp}}
            type = 'text' 
            onChange = {this.props.changed}
             value = {this.props.name} />
            {/* value = {props.name} donot work i donot know why make it */}
            </aux>
        
        );
        // return [
        //     <p key = '1' onClick = {this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old .</p>,
        //     <p key = '2' > {this.props.children} </p>,
        //     <input key = '3' type = 'text' onChange = {this.props.changed} value = {this.props.name} />
        // ]
    }
}
 Person.propTypes = {
     click: propTypes.func,
     name: propTypes.string,
     age: propTypes.number,
     changed: propTypes.func

 }
export default withClass(Person, classes.Person) ;

