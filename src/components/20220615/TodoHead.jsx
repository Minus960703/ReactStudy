import React from "react";
import { useTodoState } from "./TodoContext";
import styles from "./TodoHead.module.css";

const TodoHead = () => {
	const todos = useTodoState();
	const count = todos.filter((todo) => !todo.done);

	const today = new Date();
	const dateString = today.toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

	return (
		<div className="todo-head">
			<h1>{dateString}</h1>
			<div className={styles.day}>{dayName}</div>
			<div className={styles.tasks_left}>할 일 {count.length}개 남음</div>
		</div>
	);
};

export default TodoHead;
