import React,{useState} from 'react'
import Die from './Die'
import './Dice.css'
const diceArray = ["one","two","three","four","five","six"]


function Dice() {


const pickRandom=()=>diceArray[Math.floor(Math.random()*diceArray.length)]

const [d1,setD1] =useState(pickRandom())
const [d2,setD2] =useState(pickRandom())
const [rolling,setRolling] =useState(false)

function roll(){
 const rollInterval =setInterval(()=>{
    setD1(pickRandom())
    setD2(pickRandom())
 },300)   

setRolling(true)
setTimeout(()=>{
setRolling(false)
clearInterval(rollInterval)
},1000)
}

    return (
        <div className = "Dice">
            <div className = "DiceContainer">
            <Die face={d1} rolling={rolling}/>
            <Die face={d2} rolling={rolling}/>
            </div>
            <button onClick ={roll} disabled ={rolling}>
            {rolling ? "...Rolling":"Roll Dice"}</button>
        </div>
    )
}

export default Dice
