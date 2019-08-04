import React,{useReducer,useRef,useEffect} from 'react'

function reducer(currentState,newState){
return{
    ...currentState,
    ...newState
}
}
function StopWatchRedSimple() {
    const [{running,lapse},setState] =useReducer(reducer,{
    running:false,
    lapse:0
    })
    
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
                setState({lapse:Date.now()-startTime})
            },0)
        }
        setState({running:!running})
    }
    function handleClearClick(){
        clearInterval(intervalRef.current)
       setState({running:false,lapse:0})
    }
    return (
        <div>
            <h2>simplified reducer</h2>
           
            <label style ={{fontSize:"5em",display:"block"}}>
                {lapse}ms
            </label>
            <button onClick = {handleRunClick}>{running?'STOP':'START'}</button>
            <button onClick = {handleClearClick}>CLEAR</button>
            
        </div>
    )
}

export default StopWatchRedSimple