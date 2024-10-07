import '../App.css'
const Counters = ({count,setCount}) => {

    const submit=()=>{
        setCount(count+1)
    }

    const reset= ()=>{
        setCount(count-1)
    }

    const rzsets =()=>{
        setCount(count=0)
    }
  return (
    <div className="counter">
      <h1>{count}</h1>
        <button className='p-10 text-[red]' onClick={submit}>+</button>
        <button onClick={rzsets}>reset</button>
        <button onClick={reset}>-</button>
    </div>
  )
}
export default Counters