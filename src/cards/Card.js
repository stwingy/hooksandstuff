import React from 'react';
import './Card.css';
function Card(props) {


	return <img style={{ transform: props.transform }} className="Card" src={props.image} alt={props.name} />;
}

export default Card;
