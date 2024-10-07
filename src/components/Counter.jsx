import { useEffect, useState } from "react";
import Counters from "./Counters";
import axios from "axios";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);



// useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response=>{
//     console.log(response.data)
//   })
//   .catch(error=>{
//     console.log('Xatolik yuz berdi:', error)
//   })
// },[])


// useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response=>{
//     console.log(response.data)
//   })
//   .catch(error=>{
//     console.log(error.mesagi)
//   })
// },[])


useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response=>{
    console.log(response.data)
  })
  .catch(error=>{
    console.log('xatoliklar');
  })
},[])
  return (
    <div>
      <Counters count={count} setCount={setCount} />
   


{
  data.map((slaom)=>(
    <div key={slaom.id}>
<p>{slaom.title}</p>
    </div>
  ))
}
    </div>
  );
};
export default Counter;
