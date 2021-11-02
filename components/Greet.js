import React from 'react'

// const Greet = (props) => {
//   console.log(props)
//   return ( 
//     <div>
//     <h1>Hello {props.name} a.k.a. {props.charName}</h1>
//     {props.children}
//     </div>
//     )
// }

const Greet = ({name, charName}) => {
  return (
    <div><h1>Hello {name} a.k.a. {charName}</h1></div>
    )
}

export default Greet








