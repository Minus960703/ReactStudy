import React from "react";
import { useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useTodoState();
	return (
		<div className="todo-list">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					done={todo.done}
					id={todo.id}
				/>
			))}
		</div>
	);
};

export default TodoList;
