import React,{useState,useRef,useEffect} from 'react'

function StopWatch() {
    const [lapse,setLapse] =useState(0)
    const [running,setRunning]=useState(false)
    const intervalRef = useRef(null)
    useEffect(()=>{
        return ()=>clearInterval(intervalRef.current)
    },[])
    function handleRunClick(){
        if(running){
            clearInterval(intervalRef.current)
        }else{
            const startTime = Date.now()-lapse
           intervalRef.current= setInterval(()=>{
                setLapse(Date.now()-startTime)
            },0)
        }
        setRunning(!running)
    }
    function handleClearClick(){
        clearInterval(intervalRef.current)
        setLapse(0)
        setRunning(false)
    }
    return (
        <div>
            <h2>useRef to store interval id</h2>
            <h4>useEffect to cleanup on unmount</h4>
            <label style ={{fontSize:"5em",display:"block"}}>
                {lapse}ms
            </label>
            <button onClick = {handleRunClick}>{running?'STOP':'START'}</button>
            <button onClick = {handleClearClick}>CLEAR</button>
            
        </div>
    )
}

export default StopWatch
