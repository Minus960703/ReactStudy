import React, { createContext, useContext, useReducer, useRef } from "react";

const defaultValue = [
	{
		id: 1,
		text: "프로젝트 생성하기",
		done: true,
	},
	{
		id: 2,
		text: "컴포넌트 스타일링 하기",
		done: true,
	},
	{
		id: 3,
		text: "Context 만들기",
		done: false,
	},
	{
		id: 4,
		text: "기능 구현하기",
		done: false,
	},
];

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const todoReducer = (state, action) => {
	switch (action.type) {
		case "CREATE":
			return state.concat(action.todo);
		case "TOGGLE":
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		case "REMOVE":
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error(`Unhandled action type : ${action.type}`);
	}
};

export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, defaultValue);
	const nextId = useRef(
		defaultValue.reduce((prev, current) =>
			prev.id > current.id ? prev : current
		).id + 1
	);

	return (
		<TodoStateContext.Provider value={state}>
			<TodoDispatchContext.Provider value={dispatch}>
				<TodoNextIdContext.Provider value={nextId}>
					{children}
				</TodoNextIdContext.Provider>
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
};

export const useTodoState = () => {
	const context = useContext(TodoStateContext);
	if (!context) {
		throw new Error("Cannot find TodoStateContext");
	}
	return context;
};
export const useTodoDispatch = () => {
	const context = useContext(TodoDispatchContext);
	if (!context) {
		throw new Error("Cannot find TodoDispatchContext");
	}
	return context;
};
export const useTodoNextId = () => {
	const context = useContext(TodoNextIdContext);
	if (!context) {
		throw new Error("Cannot find TodoNextIdContext");
	}
	return context;
};
