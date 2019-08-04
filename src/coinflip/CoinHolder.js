import React from 'react'
import useFlip from './useFlip'
import Coin from './Coin'
import heads from './images/heads.png'
import tails from './images/tails.png'
const coinArray =[{src:heads,alt:"heads"},
{src:tails,alt:"tails"}]

function CoinHolder() {
 const {coinFlip,nTails,nHeads,handleClick} =useFlip(coinArray)
    return (
        <div className = "CoinHolder" style ={{backgroundColor:"#FFF",width:"100%",height:"100vh"}}>
            <h2>Flip a coin</h2>
           { coinFlip &&<Coin src={coinFlip.src} alt ={coinFlip.alt}/>}
            <button onClick ={handleClick}>Flip</button>
            <p>{`You have flipped ${nHeads+nTails} times and have ${nHeads} heads and ${nTails} tails`}</p>
        </div>
    )
}

export default CoinHolder
