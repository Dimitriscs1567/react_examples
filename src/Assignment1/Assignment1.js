import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class Assignment1 extends Component {
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
      <div>
        <UserInput change={this.switchUserNameHandler} value={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default Assignment1;