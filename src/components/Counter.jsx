import { useEffect, useState } from "react";
import Counters from "./Counters";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <Counters count={count} setCount={setCount} />
      {/* {data.map((pos) => (
        <div key={pos.id}>
          <p>{pos.title}</p>
        </div>
      ))} */}

    {/* {
      data.map((salom)=>(
        <div key={salom.id}>
<p>{salom.body}</p>
        </div>
      ))

} */}

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
