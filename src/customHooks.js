import {useState,useReducer,useRef,useEffect} from 'react'

function useCounter(initialState,step) {
    const [count,setCount] = useState(initialState)
    const increment =()=>setCount(count+step)
    return {count,increment}
}

function useStopwatch(reducer){
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
        return{handleClearClick,handleRunClick,running,lapse}
}
export  {useCounter,useStopwatch}
