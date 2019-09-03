import useLocalstorage from './useLocalStorage';
import uuid from 'uuid';
const useTodo = (init) => {
	const [ todos, setTodos ] = useLocalstorage('todos', init);

	function addTodo(newTodoText) {
		setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false } ]);
	}
	function removeTodo(id) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}
	function toggleTodo(id) {
		const newTodos = todos.map((t) => {
			return t.id === id ? { ...t, completed: !t.completed } : t;
		});
		setTodos(newTodos);
	}
	function editTodo(id, newTask) {
		const newTodos = todos.map((t) => {
			return t.id === id ? { ...t, task: newTask } : t;
		});
		setTodos(newTodos);
	}
	return { todos, addTodo, removeTodo, toggleTodo, editTodo };
};
export default useTodo;
