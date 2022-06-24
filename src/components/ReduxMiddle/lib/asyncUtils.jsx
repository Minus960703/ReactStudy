export const createPromiseThunk = (type, promiseCreator) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	const thunkCreator = (param) => async (dispatch) => {
		dispatch({ type, param });
		try {
			const payload = await promiseCreator(param);
			dispatch({
				type: SUCCESS,
				payload,
			});
		} catch (e) {
			dispatch({
				type: ERROR,
				payload: e,
				error: true,
			});
		}
	};

	return thunkCreator;
};

export const handleAsyncActions = (type, key) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	const reducer = (state, action) => {
		switch (action.type) {
			case type:
				return {
					...state,
					[key]: reducerUtils.loading(),
				};
			case SUCCESS:
				return {
					...state,
					[key]: reducerUtils.success(action.payload),
				};
			case ERROR:
				return {
					...state,
					[key]: reducerUtils.error(action.payload),
				};
			default:
				return state;
		}
	};

	return reducer;
};

export const reducerUtils = {
	default: (defaultData = null) => ({
		loading: false,
		data: defaultData,
		error: null,
	}),
	loading: (prevState = null) => ({
		data: prevState,
		loading: true,
		error: null,
	}),
	success: (payload) => ({
		data: payload,
		loading: false,
		error: null,
	}),
	error: (error) => ({
		data: null,
		loading: false,
		error,
	}),
};
