import React,{useState,useEffect} from 'react'

function Counter() {
    const initialCount =()=> Number(window.localStorage.getItem('count')) || 0
    const [count,setCount] = useState(initialCount)
    useEffect(()=>{
        window.localStorage.setItem('count',count)
    },[count])
    const increment =()=>setCount(count+1)
    return (
        <div>
            <h2>localStorage</h2>
            <button onClick = {increment}>{count}</button>
        </div>
    )
}

export default Counter
