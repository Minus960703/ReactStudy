import React from "react";
import styles from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";

const TodoItem = ({ id, done, text }) => {
	return (
		<div className={styles.todo_item}>
			<div
				className={
					done
						? `${styles.check_circle} ${styles.active}`
						: `${styles.check_circle}`
				}
			>
				{done && <MdDone />}
			</div>
			<div className={styles.text}>{text}</div>
			<div className={styles.remove}>
				<MdDelete />
			</div>
		</div>
	);
};

export default TodoItem;
