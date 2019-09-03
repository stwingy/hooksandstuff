import React from 'react';
import { AppBar, Grid, Paper, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './contexts/todo.context';

function TodoApp() {
	//let init = JSON.parse(window.localStorage.getItem('todos'));
	//const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodo(INIT);
	// if (!init.length) {
	// 	init = INIT;
	// }

	return (
		<Paper elevation={0} style={{ margin: 0, padding: 0, height: '100vh', backgroundColor: '#fafafa' }}>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Typography color="inherit">TODO HOOKS</Typography>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;

// const INIT = [
// 	{ id: uuid(), task: 'supermarket', completed: false },
// 	{ id: uuid(), task: 'bath', completed: true },
// 	{ id: uuid(), task: 'cook', completed: false }
// ];
// function useLocalstorage(key, defaultValue) {
// 	const [ state, setState ] = React.useState(() => {
// 		let val;
// 		try {
// 			val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
// 		} catch (error) {
// 			val = defaultValue;
// 		}
// 		return val;
// 	});
// 	React.useEffect(
// 		() => {
// 			window.localStorage.setItem(key, JSON.stringify(state));
// 		},
// 		[ state, key ]
// 	);
// 	return [ state, setState ];
// }

// function useTodo(init) {
// 	const [ todos, setTodos ] = useLocalstorage('todos', init);

// 	function addTodo(newTodoText) {
// 		setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false } ]);
// 	}
// 	function removeTodo(id) {
// 		const newTodos = todos.filter((todo) => todo.id !== id);
// 		setTodos(newTodos);
// 	}
// 	function toggleTodo(id) {
// 		const newTodos = todos.map((t) => {
// 			return t.id === id ? { ...t, completed: !t.completed } : t;
// 		});
// 		setTodos(newTodos);
// 	}
// 	function editTodo(id, newTask) {
// 		const newTodos = todos.map((t) => {
// 			return t.id === id ? { ...t, task: newTask } : t;
// 		});
// 		setTodos(newTodos);
// 	}
// 	return { todos, addTodo, removeTodo, toggleTodo, editTodo };
// }
