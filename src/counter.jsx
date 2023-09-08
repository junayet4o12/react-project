import { useState } from "react"

export default function Counter() {
    const [count, setcount] = useState(0);

    const HandleAdd = () => {
        const newCount=count+1;
        setcount(newCount)
   }
   const Handlereduce = () => {
    const newCount = count-1;
    setcount(newCount);
   }
    return (
        <div style={{ border: '2px solid black' }}>
            <p>Counter: {count}</p> 
            <button onClick={HandleAdd}>add</button>
             <button onClick={Handlereduce}>Reduce</button>
        </div>

    )
}