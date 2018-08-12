import React from 'react';
import './person.css'
const person = (props)=>{
    return (
        <div className = "person">
    <p onClick = {props.click}>I'm a {props.name} and I'm {props.age} years old .</p>
    <p > {props.children} </p>
    <input type = 'text' onChange = {props.changed} value = {props.name} />
    {/* value = {props.name} donot work i donot know why make it */}
    </div>
)
};
export default person;