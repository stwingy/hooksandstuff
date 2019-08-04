import React from 'react'
import './Coin.css'
function Coin({src,alt}) {
    return (
        <div className = "Coin">
           <img src={src} alt={alt}/>
        </div>
    )
}

export default Coin
