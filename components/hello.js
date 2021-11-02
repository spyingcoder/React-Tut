import React from 'react';

const Hello = () => {
  // return (
  //   <div className="myClass">
  //   <h1>Hello AYUSH SHARMA PATHAK</h1>
  //   </div>
  //   )
  
  return React.createElement( 'div', null, React.createElement( 'h1', { className: 'myClass' } ,'Hello AYUSH SHARMA PATHAK' ))
}

export default Hello