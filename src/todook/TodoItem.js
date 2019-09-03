import React,{useContext} from 'react';
import EditTodo from './EditTodo'
import { ListItemSecondaryAction, IconButton, Checkbox, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggle from './customHooks/useToggle'
import {TodoContext} from './contexts/todo.context'



function TodoItem({id,task,completed}) {
	const [isEditing,toggle] =useToggle()
  const {dispatch} =useContext(TodoContext)
	function remove() {
	
	dispatch({type:"REMOVE",id:id})
	}
	function toggleT() {
		
		dispatch({type:"TOGGLE",id:id})
	}
	return (
		<ListItem>{isEditing ? (<EditTodo  id={id} toggle ={toggle} task = {task}/>):(
			<>
			<Checkbox checked={completed} tabIndex={-1} onClick={toggleT} />
			<ListItemText
				style={{
					textDecoration: completed ? 'line-through' : 'none'
				}}
			>
				{task}
			</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="delete" onClick={remove}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit" onClick ={toggle}>
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
			</>
		)}
		</ListItem>
	);
}

export default TodoItem;
