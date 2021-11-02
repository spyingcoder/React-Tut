import React, { Component } from 'react';

class ClassClick extends Component {
  classHandler(){
    console.log("Button is clicked")
  }
  render() {
    return (
    <button onClick = {this.classHandler}>Click Me</button>
    )
  }
}

export default ClassClick