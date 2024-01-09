import React from 'react'
//without Destructuring
function Student(props) {
  return (
    <div>
      heolllllllllo
      <p>Name:{props.name}<br/>
      Age:{props.age}<br/>
    Student:{props.isStudent ? "yes" : "no"} </p>
    </div>
  )
} 
//with Destructuring
  function Person({name,age,isStudent}){
    return (
        <div>
            <h1>props program</h1>
          <p>name.{name}</p>
          <p>age.{age}</p>
          <p>Student.{isStudent}</p>
            <Student name=" shruuuuuu" age={20} isStudent={true}/>
            {/* <Student/> */}
        </div>
    )
  }
export default Person;
