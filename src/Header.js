import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
	return (
		<div className="header">
			<Link to="/counter">Counter</Link>
			<Link to="/counter1">Counter1</Link>
			<Link to="/vantilt">vanilla-tilt</Link>
			<Link to="/stopwatch">Stopwatch</Link>
			<Link to="/stopwatchreducer">stopwatchred</Link>
			<Link to="/stopwatchredsimple">stopwat reducersimple</Link>
			<Link to="/usestopwatch">useStopwatch</Link>
			<Link to="/dice">Dice</Link>
			<Link to="/lottery">Lottery</Link>
			<Link to="/coin">Coin</Link>
			<Link to="/hangman">Hangman</Link>
			<Link to="/lightsgame">Lights game</Link>
			<Link to="/boxform">BoxFormHook</Link>
			<Link to="/todo">ToDo</Link>
			<Link to="/yahtze">Yahtze</Link>
			<Link to="/cards">Cards</Link>
			<Link to="/dad">Dad Jokes</Link>
			<Link to="/vending">Vending Machine nested routes</Link>
			<Link to="/dog">DOG</Link>
			<Link to="/rescard">Responsive Card</Link>
			<Link to="/undo">Undo</Link>
			<Link to="/load">Load Data</Link>
			<Link to="dodo">Todo Hooks</Link>
			<Link to="/context">Context</Link>
			<Link to="/rp">Render Props</Link>
		</div>
	);
}

export default Header;
