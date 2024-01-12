import useCustomhooks from "./Customhooks"

const Homes=()=>{
  const [co,increment,decrement,reset] = useCustomhooks()
  return(
 <div>
<h2>count {co}</h2>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={reset}>reset</button>
 </div>
  )
}
export default Homes

