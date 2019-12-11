import React, { Component } from 'react';
import './App.css';
import Assignment1 from './Assignment1/Assignment1';

class App extends Component {
  state = {
    username: 'tikasdimitrios'
  }

  switchUserNameHandler = (event)=>{
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Assignment1 />
      </div>
    );
  }
}

export default App;
