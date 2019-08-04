import React from 'react'
import {useStopwatch} from './customHooks'

function reducer(currentState,newState){
return{
    ...currentState,
    ...newState
}
}
function StopWatchCustom() {
 const sw1 = useStopwatch(reducer)
 const sw2 = useStopwatch(reducer)
    return (
        <>
        <div>
            <h2>useStopwatch</h2>
           
            <label style ={{fontSize:"5em",display:"block"}}>
                {sw1.lapse}ms
            </label>
            <button onClick = {sw1.handleRunClick}>{sw1.running?'STOP':'START'}</button>
            <button onClick = {sw1.handleClearClick}>CLEAR</button>
            
        </div>
        <hr/>
        <stong>Lapse Difference: {sw1.lapse-sw2.lapse} ms</stong>
        < hr/>
          <div>
          
         
          <label style ={{fontSize:"5em",display:"block"}}>
              {sw2.lapse}ms
          </label>
          <button onClick = {sw2.handleRunClick}>{sw2.running?'STOP':'START'}</button>
          <button onClick = {sw2.handleClearClick}>CLEAR</button>
          
      </div>
      </>
    )
}

export default StopWatchCustom