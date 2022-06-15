import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import "./TodoTemplate.css";

const TodoTemplate = () => {
	return (
		<TodoProvider>
			<div className="todo-template">
				<TodoHead />
				<TodoList />
				<TodoCreate />
			</div>
		</TodoProvider>
	);
};

export default TodoTemplate;
