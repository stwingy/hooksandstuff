import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';
//import useTodo from '../customHooks/useTodo';

const INIT = [
	{ id: uuid(), task: 'supermarket', completed: false },
	{ id: uuid(), task: 'bath', completed: true },
	{ id: uuid(), task: 'cook', completed: false }
];

function reducer(state, action) {
	switch (action.type) {
		case 'ADD':
			return [ ...state, { id: uuid(), task: action.task, completed: false } ];
		case 'REMOVE':
			return state.filter((td) => td.id !== action.id);
		case 'TOGGLE':
			return state.map((t) => (t.id === action.id ? { ...t, completed: !t.completed } : t));
		case 'EDIT':
			return state.map((t) => (t.id === action.id ? { ...t, task: action.newTask } : t));
		default:
			return state;
	}
}
export const TodoContext = createContext();
// const { todos, addTodo, removeTodo, toggleTodo, editTodo }

export function TodosProvider(props) {
	const [ todos, dispatch ] = useReducer(reducer, INIT);
	//const val = useTodo(INIT);
	return <TodoContext.Provider value={{ todos, dispatch }}>{props.children}</TodoContext.Provider>;
}
