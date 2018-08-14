import React, { Component } from 'react';
import classes from './person.css';
class Person  extends Component {
    state = {  }
    render() { 
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

