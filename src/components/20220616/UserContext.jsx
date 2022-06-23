import React, { createContext, useContext, useReducer } from "react";
import {
	createAsyncDispatcher,
	createAsyncHandler,
	defaultAsyncValue,
} from "./asyncActionUtils";
import * as api from "./api";

const defaultValue = {
	users: defaultAsyncValue,
	user: defaultAsyncValue,
};

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");

const usersReducer = (state, action) => {
	switch (action.type) {
		case "GET_USERS":
		case "GET_USERS_SUCCESS":
		case "GET_USERS_ERROR":
			return usersHandler(state, action);
		case "GET_USER":
		case "GET_USER_SUCCESS":
		case "GET_USER_ERROR":
			return userHandler(state, action);
		default:
			throw new Error("Unhandled action type");
	}
};

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const UsersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(usersReducer, defaultValue);
	return (
		<UsersStateContext.Provider value={state}>
			<UsersDispatchContext.Provider value={dispatch}>
				{children}
			</UsersDispatchContext.Provider>
		</UsersStateContext.Provider>
	);
};

export const useUsersState = () => {
	const state = useContext(UsersStateContext);
	if (!state) {
		throw new Error("Cannot Find UsersProvider");
	}
	return state;
};

export const useUsersDispatch = () => {
	const dispatch = useContext(UsersDispatchContext);
	if (!dispatch) {
		throw new Error("Cannot Find UsersProvider");
	}
	return dispatch;
};

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);

// export const getUsers = async (dispatch) => {
// 	dispatch({ type: "GET_USERS" });
// 	try {
// 		const response = await axios.get(
// 			"https://jsonplaceholder.typicode.com/users"
// 		);
// 		dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
// 	} catch (e) {
// 		dispatch({ type: "GET_USERS_ERROR", error: e });
// 	}
// };

// export const getUser = async (dispatch, id) => {
// 	dispatch({ type: "GET_USER" });
// 	try {
// 		const response = await axios.get(
// 			`https://jsonplaceholder.typicode.com/users/${id}`
// 		);
// 		dispatch({ type: "GET_USER_SUCCESS", data: response.data });
// 	} catch (e) {
// 		dispatch({ type: "GET_USER_ERROR", error: e });
// 	}
// };
