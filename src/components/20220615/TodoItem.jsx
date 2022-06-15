import React from "react";
import styles from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";

const TodoItem = ({ id, done, text }) => {
	const dispatch = useTodoDispatch();
	// const dispatch = useTodoDispatch();
	const onToggle = () => dispatch({ type: "TOGGLE", id });
	const onRemove = () => dispatch({ type: "REMOVE", id });
	return (
		<div className={styles.todo_item}>
			<div
				className={
					done
						? `${styles.check_circle} ${styles.active}`
						: `${styles.check_circle}`
				}
				onClick={onToggle}
			>
				{done && <MdDone />}
			</div>
			<div className={styles.text}>{text}</div>
			<div className={styles.remove} onClick={onRemove}>
				<MdDelete />
			</div>
		</div>
	);
};

export default React.memo(TodoItem);
