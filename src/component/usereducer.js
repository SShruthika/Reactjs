import React from 'react'
import { useReducer } from 'react'

const initialstate = 0

const reducer =(state,action)=>{
    switch(action)
    {
        case'increment':return state + 1
        case'decrement':return state - 1
        case'reset':return initialstate
        default:return state
    }
}
const UseReducer = () => {
   const[coun,dispatch] =useReducer(reducer,initialstate)
   console.log('usereducer render');
  return (
    <div>
      <div>{coun}</div>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
export default UseReducer
