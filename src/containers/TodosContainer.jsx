import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Redux/Todos";
import { addTodo, toggleTodo } from "../components/Redux/moduels/todos";

const TodosContainer = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
	const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

	return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
