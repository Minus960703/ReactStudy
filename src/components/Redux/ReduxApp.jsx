import React from "react";
import CounterContainer from "../../containers/CounterContainer";
import TodosContainer from "../../containers/TodosContainer";

const ReduxApp = () => {
	return (
		<div>
			<CounterContainer />
			<hr />
			<TodosContainer />
		</div>
	);
};

export default ReduxApp;
