import React, { useContext } from 'react';
import { TodoContext } from './contexts/todo.context';
import TodoItem from './TodoItem';

import { Divider, Paper, List } from '@material-ui/core';
function TodoList(props) {
	const { todos } = useContext(TodoContext);
	//todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}

	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((t, i) => (
						<React.Fragment key={t.id}>
							<TodoItem {...t} />

							{i < todos.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</List>
			</Paper>
		);
	return null;
}

export default TodoList;
