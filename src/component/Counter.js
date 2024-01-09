import React, { useState } from 'react'

const Counter  = () => {
    const[count,setCount]=useState('shru');
    const[person,setPerson]=useState({firstName: '',lastName:''});

    const increase=()=>{
      for (let i=0;i<5;i++){
      setCount(prevState => prevState+1)
    }}
  return (
    <div>
      <button onClick={()=>setCount('hari')}>click</button>
      <p>current value of count is {count}</p>
      <button onClick={()=>increase()}>click increase 5</button>
<hr/>
<input type ="text" onChange={(e)=>setPerson({...person,firstName:e.target.value})} placeholder='enter your name'/>

<input type ="text" onChange={(e)=>setPerson({...person,lastName:e.target.value})} placeholder='enter your name'/>
<p>firstname :{person.firstName}</p>
<p>firstname :{person.lastName}</p>
    </div>
  )
}
export default  Counter;
