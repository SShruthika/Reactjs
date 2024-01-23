import { useState,  } from "react";

const useCustomhooks= () => {
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
export default useCustomhooks;

