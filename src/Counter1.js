import React from 'react'
import {useCounter} from './customHooks'
function Counter1() {
    const{count,increment} = useCounter(5,5)
    return (
        <div>
            <h2>customHook</h2>
            <button onClick = {increment}>{count}</button>
        </div>
    )
}

export default Counter1
