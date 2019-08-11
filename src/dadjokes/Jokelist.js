import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import Joke from './Joke';
import './Jokelist.css';

const NUM_JOKES = 10;

function Jokelist() {
	const [ jokes, setJokes ] = useState(JSON.parse(window.localStorage.getItem('jokes') || '[]'));
	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			async function getJoke() {
				try {
					const jokes = [];
					setLoading(true);
					while (jokes.length < NUM_JOKES) {
						const res = await axios.get('https://icanhazdadjoke.com/', {
							headers: { Accept: 'application/json' }
						}); //headers specific to api

						jokes.push({ text: res.data.joke, votes: 0, id: uuid() });
					}
					setJokes(jokes);
					setLoading(false);
				} catch (e) {
					alert(e);
					setLoading(false);
				}
			}

			if (jokes.length === 0) getJoke();
			window.localStorage.setItem('jokes', JSON.stringify(jokes));
		},
		[ jokes ]
	);

	function handleVote(id, delta) {
		const newJokes = jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j));
		setJokes(newJokes);
	}

	async function handleClick() {
		try {
			setLoading(true);
			const njokes = [];
			while (njokes.length < NUM_JOKES) {
				const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } }); //headers specific to api
				if (!seenJokes.has(res.data.joke)) {
					njokes.push({ text: res.data.joke, votes: 0, id: uuid() });
				}
			}
			const newJ = [ ...jokes, ...njokes ];
			setJokes(newJ);
			setLoading(false);
		} catch (error) {
			alert(error);
			setLoading(false);
		}
	}
	function removeMe(id){
		const newJ = jokes.filter(j=>j.id !==id)
		setJokes(newJ)
	}

	if (loading) {
		return (
			<div className="JokeList-spinner">
				<i className="far fa-8x fa-laugh fa-spin" />
				<h1 className="JokeList-title">Loading...</h1>
			</div>
		);
	}
	const seenJokes = new Set(jokes.map((j) => j.text));
	jokes.sort((a,b)=>b.votes-a.votes)
	return (
		<div className="Jokelist">
			<div className="Jokelist-sidebar">
				<h1 className="Jokelist-title">
					<span>Dad</span> Jokes
				</h1>
				<img
					src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
					alt="smile"
				/>
				<button className="JokeList-getmore" onClick={handleClick}>
					New Jokes
				</button>
			</div>

			<div className="Jokelist-jokes">
				{jokes.map((j) => (
					<Joke
						text={j.text}
						votes={j.votes}
						key={j.id}
						removeMe={()=>removeMe(j.id)}
						upVote={() => handleVote(j.id, 1)}
						downVote={() => handleVote(j.id, -1)}
					/>
				))}
			</div>
		</div>
	);
}

export default Jokelist;
