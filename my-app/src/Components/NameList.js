import React from 'react';
import Person from './Person';

function NameList() {
     const persons=[
         {
        id:1,
        name:'aryan',
        age:40,
        skill:'react'
         },
         {
        id:2,
        name:'ankit',
        age:80,
        skill:'js'
         },
         {
        id:3,
        name:'anish',
        age:60,
        skill:'html'
         }
     ]
    
     const personList  = persons.map(person=> <Person key={person.id} person={person}/>)
     return <div>{personList}</div>
  
     
}

export default NameList
