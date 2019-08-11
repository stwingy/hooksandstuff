import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';
import DogList from './DogList';
import Dogdetails from './Dogdetails';
import Navbar from './Navbar';
import './Dogapp.css';
const DOGS = [
	{
		name: 'Whiskey',
		age: 5,
		src: whiskey,
		facts: [
			'Whiskey loves eating popcorn.',
			'Whiskey is a terrible guard dog.',
			'Whiskey wants to cuddle with you!'
		]
	},
	{
		name: 'Hazel',
		age: 3,
		src: hazel,
		facts: [ 'Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people more than dogs.' ]
	},
	{
		name: 'Tubby',
		age: 4,
		src: tubby,
		facts: [
			'Tubby is not the brightest dog',
			'Tubby does not like walks or exercise.',
			'Tubby loves eating food.'
		]
	}
];
function Dogapp(props) {
	function getDog(props) {
		let name = props.match.params.name;

		let currentDog = DOGS.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
		return <Dogdetails {...props} dog={currentDog} />;
	}
	return (
		<div className="Dogapp">
			<Navbar dogs={DOGS} />
			<div className="container">
				<Switch>
					<Route exact path={`${props.match.url}/:name`} render={(props) => getDog(props)} />
					<Route exact path={props.match.url} render={() => <DogList dogs={DOGS} />} />
					<Redirect to="/dog" />
				</Switch>
			</div>
		</div>
	);
}

export default withRouter(Dogapp);
