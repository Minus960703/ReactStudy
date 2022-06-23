const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCRREASE";
const DECREASE = "counter/DECREASE";

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const defaultValue = {
	number: 0,
	diff: 1,
};

const counter = (state = defaultValue, action) => {
	switch (action.type) {
		case SET_DIFF:
			return {
				...state,
				diff: action.diff,
			};
		case INCREASE:
			return {
				...state,
				number: state.number + state.diff,
			};
		case DECREASE:
			return {
				...state,
				number: state.number - state.diff,
			};
		default:
			return state;
	}
};

export default counter;
