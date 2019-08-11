import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar(props) {
	const dogLinks = props.dogs.map((dog) => (
		<li className="nav-item" key={dog.name}>
			<NavLink exact to={`/dog/${dog.name}`} className="nav-link">
				{dog.name}
			</NavLink>
		</li>
	));

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/dog">
				Dog App
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink exact to="/dog" className="nav-link">
							Home
						</NavLink>
					</li>
					{dogLinks}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
