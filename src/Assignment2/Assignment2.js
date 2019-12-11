import React, { Component } from 'react';
import CharComponent from './CharComponent/CharComponent'

class Assignment2 extends Component {
  state = {
    input: ''
  }

  inputChange = (event)=>{
    this.setState({
        input: event.target.value
    });
  }

  deleteChar = (index)=>{
    let tempInput = this.state.input;
    let result = tempInput.slice(0, index) + tempInput.slice(index + 1, tempInput.length);
    console.log(result);

    this.setState({
        input: result
    });
  }

  render() {

    let chars = [...this.state.input];
    let displayedChars = chars.map((char, index)=>{
        return (
            <CharComponent char={char} key={index} click={()=>{this.deleteChar(index)}}></CharComponent>
        );
    });

    return (
      <div>
        <input type='text' onChange={this.inputChange} value={this.state.input}/>
        <p>{this.state.input.length}</p>
        {displayedChars}
      </div>
    );
  }
}

export default Assignment2;