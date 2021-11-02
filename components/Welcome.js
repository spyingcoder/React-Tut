import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    // return (
    // <h1>
    // Welcome {this.props.name} a.k.a. {this.props.charName}
    // </h1>
    // )
    const{name, charName} = this.props
    return(
      <h1>Welcome {name} a.k.a. {charName}</h1>
      )
  }
}

export default Welcome