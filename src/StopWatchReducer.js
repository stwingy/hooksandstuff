import React,{useReducer,useRef,useEffect} from 'react'

function reducer(state,action){
switch(action.type){
    case "LAPSE":
        return{
            ...state,
            lapse:action.now-action.startTime
        }
    case "TOGGLERUNNING":
        return {
            ...state,
            running:!state.running
        }
    case "CLEAR":
        return {
            ...state,
            running:false,
            lapse:0
        }
    default:
        return state
}
}
function StopWatchReducer() {
    const [{running,lapse},dispatch] =useReducer(reducer,{
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
                dispatch({type:"LAPSE",now:Date.now(),startTime})
            },0)
        }
        dispatch({type:"TOGGLERUNNING"})
    }
    function handleClearClick(){
        clearInterval(intervalRef.current)
       dispatch({type:"CLEAR"})
    }
    return (
        <div>
            <h2>useReducer</h2>
           
            <label style ={{fontSize:"5em",display:"block"}}>
                {lapse}ms
            </label>
            <button onClick = {handleRunClick}>{running?'STOP':'START'}</button>
            <button onClick = {handleClearClick}>CLEAR</button>
            
        </div>
    )
}

export default StopWatchReducer