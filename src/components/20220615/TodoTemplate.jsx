import React from "react";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import "./TodoTemplate.css";

const TodoTemplate = () => {
	return (
		<div className="todo-template">
			<TodoHead />
			<TodoList />
			<TodoCreate />
		</div>
	);
};

export default TodoTemplate;
