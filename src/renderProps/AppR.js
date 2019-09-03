import React from 'react';
class Amount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 0,
			comment: 'The pound is Rubbish!'
		};
	}
	onIncrement = () => {
		this.setState((state) => ({ amount: state.amount + 1 }));
	};
	onDecrement = () => {
		this.setState((state) => ({ amount: state.amount - 1 }));
	};
	render() {
		return (
			<div>
				<span>US Dollar: {this.state.amount} </span>
				<button type="button" onClick={this.onIncrement}>
					+
				</button>
				<button type="button" onClick={this.onDecrement}>
					-
				</button>
				{this.props.children(this.state.amount)}
				{this.props.rend(<h2>{this.state.comment}</h2>)}
			</div>
		);
	}
}
const Pound = ({ amount }) => <h1>{`£ ${(amount * 1.2).toFixed(2)}`}</h1>;
const Euro = ({ amount }) => <h1>{`E ${(amount * 1.1).toFixed(2)}`}</h1>;
function AppR() {
	return (
		<Amount rend={(val) => val}>
			{(amount) => (
				<div>
					<Pound amount={amount} />
					<Euro amount={amount} />
				</div>
			)}
		</Amount>
	);
}

export default AppR;
