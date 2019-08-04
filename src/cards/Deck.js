import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';
//const API_URL ="https://deckofcardsapi.com/api/deck/new/shuffle/"
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';
// "2wh55f4l4sl5"
function Deck() {
	const [ deck, setDeck ] = useState(null);
	const [ drawn, setDrawn ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		async function fetchData() {
			try {
				const result = await axios.get(`${API_BASE_URL}/new/shuffle/`);
				setDeck(result.data);
			} catch (error) {
				alert(error);
			}
		}
		fetchData();
	}, []);
	const makeTransform = () => {
		let angle = Math.random() * 90 - 45;
		let xpos = Math.random() * 40 - 20;
		let ypos = Math.random() * 40 - 20;
		return `translate(${xpos}px,${ypos}px) rotate(${angle}deg)`;
	};
	async function getCard() {
		let id = deck.deck_id;
		setLoading(true);
		try {
			let cardUrl = `${API_BASE_URL}/${id}/draw/`;
			let result = await axios.get(cardUrl);
			if (!result.data.success) throw new Error('NO CARDS LEFT');
			let card = result.data.cards[0];
			const transform = makeTransform();
			const newArray = [
				...drawn,
				{ id: card.code, image: card.image, name: `${card.value} of ${card.suit}`, transform: transform }
			];
			setDrawn(newArray);
			setLoading(false);
		} catch (err) {
			alert(err);
		}
	}
	const renderCards = () => {
		return drawn.map((c) => (
			<Card name={c.name} image={c.image} key={c.id} loading={loading} transform={c.transform} />
		));
	};
	return (
		<div className = "Deck">
      <h1 className ="Deck-title">Card Dealer</h1>
			<h2 className ="Deck-title subtitle">useEffect to load data</h2>
			<button className ="Deck-btn"onClick={getCard}>Get Card</button>
			<div className="Deck-cardarea">{renderCards()}</div>
		</div>
	);
}

export default Deck;
