import React, { useContext } from 'react';
import { TodoContext } from './contexts/todo.context';
import useForm from './customHooks/useForm';
import { TextField, Paper } from '@material-ui/core';

function TodoForm() {
	const [ inputs, handleChange, handleSubmit, reset ] = useForm({ td: '' }, submitMe);
	const { dispatch } = useContext(TodoContext);
	function submitMe(e) {
		dispatch({ type: 'ADD', task: inputs.td });

		reset();
	}
	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			{inputs.td}
			<form onSubmit={handleSubmit}>
				<TextField
					name="td"
					value={inputs.td}
					onChange={handleChange}
					margin="normal"
					label="Add New Todo"
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoForm;
