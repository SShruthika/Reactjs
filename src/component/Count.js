import React, { useEffect, useState } from 'react'

const Count = () => {
    const[count,setCount]=useState(0);
    const[msg,setMsg]=useState("initial message")
 
    useEffect(()=>{
    console.log('component mounted / updated');
    console.log(msg);
    console.log('count is incresed to ',count);
  },[])
  return (
    <div>
      <button onClick={()=>{setCount(count + 1)}}>increasecount</button>
      <p>the count value is:{count}</p>
      <button onClick={()=>{setMsg('msg update on click event')}}>update message</button>
    </div>
  )
  }
export default Count;
