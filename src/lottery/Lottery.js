import React, { useState } from 'react';
import Ball from './Ball';
import './Lottery.css'
function Lottery({title = 'Lotto', numBalls = 6, maxNum = 49, bonus =false}) {
 const [stateArray,setStateArray] = useState(Array.from({length:numBalls}))
 const[bonusB,setBonusB] = useState(null)
    function handleClick(){
        const lottoArray =[]
        for(let i=1;i<=maxNum;i++){
            lottoArray.push(i)
        }
       const jiggled = lottoArray.sort(() => Math.random() - 0.5);
if(bonus) setBonusB(jiggled[numBalls+1])
       const smallJig =jiggled.slice(0,numBalls)
       setStateArray(()=>smallJig)
        
    }
	return (
		<section className = "Lottery">
			<h2>{title}</h2>
			<div>
				{stateArray.map((item,i)=>(
                    <Ball key = {i} num ={item} to ={i}/>
                ))}
			</div>
            <div>
                {bonus &&(
                    <>
                    <h3>Bonus</h3>
                <Ball num ={bonusB} bonus ={true} to={numBalls+2}/>
                </>)}
            </div>
			<button onClick ={handleClick}>Generate</button>
		</section>
	);
}

export default Lottery;
