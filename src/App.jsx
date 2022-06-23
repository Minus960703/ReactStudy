import React from "react";
import UserApp from "./components/20220607/UserApp";
import ContextSample from "./components/20220614/ContextSample";
import TodoApp from "./components/20220615/TodoApp";
import Users from "./components/20220616/Users";
import { UsersProvider } from "./components/20220616/UserContext";

const App = () => {
	return (
		<div>
			{/* <UserApp /> */}
			{/* <TodoApp /> */}
			<UsersProvider>
				<Users />
			</UsersProvider>

			{/* <ContextSample /> */}
		</div>
	);
};

export default App;
