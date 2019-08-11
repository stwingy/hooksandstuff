import React from 'react';
import { Link } from 'react-router-dom';
import './Dogdetails.css';
function Dogdetails(props) {
	return (
		<div className="Dogdetails row justify-content-center mt-5">
			<div className="col-11 col-lg-5">
				<div className=" Dogdetails-card card">
					<img className="card-img-top" src={props.dog.src} alt={props.dog.name} />
					<div className="card-body">
						<h2 className="card-title">{props.dog.name}</h2>
						<h4 className="card-subtitle text-muted">{props.dog.age} years old</h4>
					</div>
					<ul className="list-group list-group-flush">
						{props.dog.facts.map((fact, i) => (
							<li className="list-group-item" key={i}>
								{fact}
							</li>
						))}
					</ul>
					<div className="card-body">
						<Link to="/dog" className="btn btn-info">
							Return
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dogdetails;
