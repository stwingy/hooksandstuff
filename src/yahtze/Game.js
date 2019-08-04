import React, { useReducer, useEffect, useState } from 'react';
import { scoreR, reducer } from './reducers';
import myContext from './context';
import Dice from './Dice';
import ScoreTable from './ScoreTable'
import './Game.css'
function Game() {
	
	const states = { startdiceArray: [ 1, 1, 1, 1, 1 ] };
	
	const [ state, setState ] = useReducer(reducer, {
		diceArray: [ ...states.startdiceArray.map((d, i) => (d = Math.ceil(Math.random() * 6))) ],
		locked: [ false, false, false, false, false ],
		rollsLeft: 3,
		rolling: false,
		total:0,
		disArray: [false,false,false,false,false,false,false,false,false,false,false,false,false],
		nulled:true
	});
	function scoreReducer(arr,action,id){
		setState({rollsLeft:3})
		console.log("RL ",state.rollsLeft)
	const newdisArray = [
		...state.disArray.slice(0, id),
		!state.disArray[id],
		...state.disArray.slice(id + 1)
	  ]
	setState({disArray:newdisArray})

	checkEnding()
		 setState({total:state.total+scoreR(arr, action)})
		setState({locked: Array(5).fill(false)})
		
		 
		// animateRoll()
		
	   }
	   function checkEnding(){
		   const a =state.disArray.filter(dis=> dis !==true)
		   console.log(a.length)
		   if(state.disArray.length<=1)console.log("FIN")
	   }

	function animateRoll() {
		setState({ rolling: true });
		setTimeout(roll, 1000);
	
	
	
	}
	function roll() {
		
		const shuffledA = state.diceArray.map((d, i) => (state.locked[i] ? d : Math.ceil(Math.random() * 6)));
		setState({ diceArray: shuffledA });
		const newLocked=state.rollsLeft > 1 ? state.locked : Array(5).fill(true)
		setState({locked:newLocked })
		setState({ rollsLeft: state.rollsLeft - 1 });
		setState({rolling: false})
		setState({nulled:false})
		
//
		// const score = scoreReducer(diceArray, { type: 'FULLHOUSE' });
		// console.log(score);
		// const a = [ 1, 5, 5, 3, 5 ];
		// var myvar = scoreReducer(a, { type: 'UPPER', payload: '5' });
		// console.log(myvar);
	}
	function displayRollInfo() {
		const messages = [ '0 Rolls Left', '1 Roll Left', '2 Rolls Left', 'Start' ];
		return messages[state.rollsLeft];
	}
	function handleClick(idx) {
		console.log(state.locked,state.rollsLeft)
		if (state.rollsLeft > 0 && !state.rolling) {
			
			const newLock = [
				...state.locked.slice(0, idx),
				!state.locked[idx],
				...state.locked.slice(idx + 1)
			  ]
			 
			setState({ locked: newLock });
		
			
		}
		
	}

	return (
		<myContext.Provider value={{ state, setState,handleClick:handleClick,scoreReducer:scoreReducer }}>
			<div className="Game">
			<header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>
		  <section className='Game-dice-section'>
			<Dice disabled={state.rollsLeft === 0} />
			<div className="Game-button-wrapper">
				<button
					className="Game-reroll"
					disabled={state.locked.every((x) => x) || state.rollsLeft === 0 || state.rolling}
					onClick={animateRoll}
				>
					{displayRollInfo()}
				</button>
				
			</div>
			</section>
			</header>
			<ScoreTable/>
			</div>
		</myContext.Provider>
	);
}

export default Game;
