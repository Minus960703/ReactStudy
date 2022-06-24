import React from "react";
import UserApp from "./components/20220607/UserApp";
import ContextSample from "./components/20220614/ContextSample";
import TodoApp from "./components/20220615/TodoApp";
import Users from "./components/20220616/Users";
import { UsersProvider } from "./components/20220616/UserContext";
import "./components/Redux/exercise";
import ReduxApp from "./components/Redux/ReduxApp";
import ReduxMiddleApp from "./components/ReduxMiddle/ReduxMiddleApp";

const App = () => {
	return (
		<div>
			{/* <UserApp /> */}
			{/* <TodoApp /> */}
			{/* <UsersProvider>
				<Users />
			</UsersProvider> */}
			{/* <ReduxApp /> */}
			<ReduxMiddleApp />
			{/* <ContextSample /> */}
		</div>
	);
};

export default App;
