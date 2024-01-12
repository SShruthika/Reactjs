import { useState,  } from "react";
const Customhooks= () => {
  const [co, setCount] = useState(0);

  const increment =()=>{
    setCount(prevstate =>prevstate+1)

  }
  
  const decrement =()=>{
    setCount(prevstate =>prevstate-1)
  }
  
  const reset=()=>{
    setCount(0)

  }
return[co,increment,decrement,reset]
}
export default Customhooks;

