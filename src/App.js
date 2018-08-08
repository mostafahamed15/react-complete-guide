import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am react app </h1>
        <p>This is really working </p>
        <Person/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null , "Does it work now?"));
  }
}

export default App;
