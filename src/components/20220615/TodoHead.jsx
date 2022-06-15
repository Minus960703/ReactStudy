import React from "react";
import styles from "./TodoHead.module.css";

const TodoHead = () => {
	return (
		<div className="todo-head">
			<h1>2022년 6월 16일</h1>
			<div className={styles.day}>일요일</div>
			<div className={styles.tasks_left}>할 일 2개 남음</div>
		</div>
	);
};

export default TodoHead;
