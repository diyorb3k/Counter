import { useState } from "react"
import Counters from "./Counters"

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <Counters   count={count}  setCount={setCount}/>
    </div>
  )
}
export default Counter