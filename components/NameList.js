import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 40,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 32,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
    ]
  const nameList = names.map((name, index) => <h2 key = {index}> {index} {name}</h2>)
  return <div>{nameList}</div>
}

export default NameList










