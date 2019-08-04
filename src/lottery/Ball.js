import React,{useState,useEffect} from 'react'
import './Ball.css'
function Ball({num,bonus=false,to}) {
    const[classTobe,setClassTobe]=useState("")
    useEffect(()=>{
        setClassTobe("")
      const timer=  setTimeout(()=>{
            setClassTobe("vis")
        },to*100)
        return ()=>clearTimeout(timer)
    },[num,to])
   
  
    return (
        <div className={`Ball ${bonus && "BonusBall"} ${classTobe}`}>
            {num}
        </div>
    )
}

export default Ball
