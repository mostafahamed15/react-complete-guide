import React from 'react';

import classes from './cockpit.css';
import Aux from '../../hoc/AuxM';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    console.log(props);
    if (props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
   if (props.persons.length <= 2){
    assignedClasses.push(classes.red);
   }
   if (props.persons.length <= 1){
    assignedClasses.push(classes.bold);
   }
    return (
        <Aux>
       <h1>{props.appTitle} </h1>
        <p className = {assignedClasses.join(' ')}>This is really working </p>
        <button
        className = {btnClass}
        onClick = {props.clicked}> Switch Person </button>
        </Aux>
    )
}

export default cockpit;