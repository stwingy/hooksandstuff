import React from 'react'
import './Die.css'
function Die({face,rolling}) {
    return (
        <div>
          <i className = {`Die1 fas fa-dice-${face} ${rolling && "wobbling"}`}></i>  
        </div>
    )
}

export default Die
