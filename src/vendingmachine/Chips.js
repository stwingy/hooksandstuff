import React, { useState } from 'react';
import Message from './Message';
import chipsImg from './Chips.png';
import './Chips.css';
function Chips(props) {
	console.log(props)
	const [ bags, setBags ] = useState([]);
	function handleClick() {
		
		const x = window.innerWidth * Math.random();
		const y = window.innerHeight * Math.random();
		const newBags = [ ...bags, { x, y } ];
		setBags(newBags);
		
	}

	const newBag = bags.map((bag, i) => (
		<img
			key={i}
			src={chipsImg}
			className="bag"
			style={{ top: `${bag.y}px`, left: `${bag.x}px`, width: '100px', position: 'absolute' }}
			alt="bag of lay's chips"
		/>
	));
	return (
		<div className="Chips" style={{ height: '100vh' }}>
			<Message>
				chips
				<button onClick={handleClick}>X</button>
			</Message>
			{newBag}
		</div>
	);
}

export default Chips;
