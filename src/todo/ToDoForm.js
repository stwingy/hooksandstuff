import React from 'react';
import useSignUpForm from './useSignUpForm';
import uuid from 'uuid/v4'
import './ToDoForm.css'
function ToDoForm(props) {
	const { inputs, handleInputChange, handleSubmit, reset } = useSignUpForm({ todo: '' }, calBack);
	function calBack() {
        console.log(inputs.todo);
  props.dispatch({type:"ADD",payload:{todo:inputs.todo,completed:false,id:uuid()}})
  reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className='NewTodoForm'>
				<label htmlFor="todo">Add Todo</label>
				<input
					value={inputs.todo}
					onChange={handleInputChange}
					name="todo"
					type="text"
					placeholder="Enter things to do"
					id="todo"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoForm;
