import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { TodoContext } from './contexts/todo.context';
import useForm from './customHooks/useForm';

function EditTodo(props) {
	const { dispatch } = useContext(TodoContext);
	const [ inputs, handleChange, handleSubmit, reset ] = useForm({ edit: props.task }, callBack);

	function callBack() {
		
		dispatch({type:"EDIT",id:props.id,newTask:inputs.edit})
		reset();
		props.toggle();
	}
	return (
		<form onSubmit={handleSubmit} style={{ marginLeft: '1rem', width: '50%' }}>
			<TextField fullWidth margin="normal" name="edit" value={inputs.edit} onChange={handleChange} autoFocus />
		</form>
	);
}

export default EditTodo;
