import React from "react";
import Counter from "../components/Redux/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	decrease,
	increase,
	setDiff,
} from "../components/Redux/moduels/counter";

const CounterContainer = () => {
	const { number, diff } = useSelector(
		(state) => ({
			number: state.counter.number,
			diff: state.counter.diff,
		}),
		shallowEqual
		// (left, right) => {
		// 	return left.diff === right.diff && left.number === right.number;
		// }
	);

	// const number = useSelector((state) => state.counter.number);
	// const diff = useSelector((state) => state.counter.diff);
	const dispatch = useDispatch();

	const onIncrease = () => dispatch(increase());
	const onDecrease = () => dispatch(decrease());
	const onSetDiff = (diff) => dispatch(setDiff(diff));

	return (
		<Counter
			number={number}
			diff={diff}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			onSetDiff={onSetDiff}
		/>
	);
};

export default CounterContainer;
