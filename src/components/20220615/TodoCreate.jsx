import React, { useState } from "react";
import styles from "./TodoCreate.module.css";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const TodoCreate = () => {
	const [value, setValue] = useState("");
	const [open, setOpen] = useState(false);

	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();

	const onCreate = () => {
		dispatch({
			type: "CREATE",
			todo: { id: nextId.current, text: value, done: false },
		});
		setValue("");
		setOpen(false);
		nextId.current += 1;
	};
	const onChange = (e) => {
		setValue(e.target.value);
	};
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
							onChange={onChange}
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									onCreate();
								}
							}}
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

export default React.memo(TodoCreate);
