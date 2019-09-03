import React, { useState, useEffect } from 'react';
import { callbackify } from 'util';

const useToggle = (initial = false) => {
	const [ state, setState ] = useState(initial);
	const toggle = () => setState(!state);
	return [ state, toggle ];
};
const useForm = (initialValues, callBack) => {
	const [ inputs, setInputs ] = useState(initialValues);
	const handleChange = (e) => {
		e.persist();
		setInputs((input) => ({ ...inputs, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		callBack();
	};
	const reset = () => setInputs(initialValues);
	return [ inputs, handleChange, handleSubmit, reset ];
};

function Counter() {
	const initialCount = () => Number(window.localStorage.getItem('count')) || 0;
	const [ count, setCount ] = useState(initialCount);
	useEffect(
		() => {
			window.localStorage.setItem('count', count);
		},
		[ count ]
	);
	const increment = () => setCount(count + 1);

	const [ isHappy, toggleIsHappy ] = useToggle(true);
	const [ inputs, handleChange, handleSubmit, reset ] = useForm({ email: '', name: '' }, submitMe);
	function submitMe(e) {
		alert(`thanks ${inputs.name} at ${inputs.email}`);
		reset();
	}
	return (
		<div>
			<h2>localStorage</h2>
			<button onClick={increment}>{count}</button>
			<h3 onClick={toggleIsHappy}>{isHappy ? '👲' : '👎'}</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" name="email" value={inputs.email} onChange={handleChange} />

				<input type="text" name="name" value={inputs.name} onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
export default Counter;
