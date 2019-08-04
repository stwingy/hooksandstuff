import React, { useReducer,useEffect } from 'react';
import Todo from './Todo';
import ToDoForm from './ToDoForm';
import './ToDoList.css';
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				todoList: [ ...state.todoList, action.payload ]
			};
		case 'REMOVE':
			let removed = state.todoList.filter((td) => td.id !== action.id);
			return {
				...state,
				todoList: removed
			};
		case 'EDIT':
			let edited = state.todoList.map((td) => {
				if (td.id === action.payload.id) {
					return { ...td, todo: action.payload.task };
				}
				return td;
			});
			return {
				...state,
				todoList: edited
			};
		case 'TOGGLECOMPLETE':
			let comp = state.todoList.map((td) => {
				if (td.id === action.id) {
					return { ...td, completed: !td.completed };
				}
				return td;
			});
			return {
				...state,
				todoList: comp
			};

		default:
			return state;
	}
};
function TodoList() {
    const initialState = {todoList:JSON.parse(localStorage.getItem("state")) || []}
    const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(()=>
    localStorage.setItem('state',JSON.stringify(state.todoList)),[state.todoList]
    )
	function makeList() {
		return state.todoList.map((td) => (
			<Todo key={td.id} todo={td.todo} id={td.id} dispatch={dispatch} completed={td.completed} />
		));
	}
	return (
		<div className="ToDoList">
			<h1>
				Todo List <span>useReducer & custom form hook</span>
			</h1>
			<ul>{makeList()}</ul>
			<ToDoForm dispatch={dispatch} />
		</div>
	);
}

export default TodoList;
