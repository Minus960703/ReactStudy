import React, { useState } from "react";
import styles from "./TodoCreate.module.css";
import { MdAdd } from "react-icons/md";

const TodoCreate = () => {
	const [open, setOpen] = useState(false);
	const onToggle = () => setOpen(!open);
	return (
		<>
			{open && (
				<div className={styles.insert_form_position}>
					<div className={styles.insert_form}>
						<input
							type="text"
							className={styles.input}
							placeholder="할 일을 입력 후, Enter 를 누르세요"
							autoFocus
						/>
					</div>
				</div>
			)}
			<div
				className={
					open
						? `${styles.circle_btn} ${styles.active}`
						: `${styles.circle_btn}`
				}
				onClick={onToggle}
			>
				<MdAdd />
			</div>
		</>
	);
};

export default TodoCreate;
