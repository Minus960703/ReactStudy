import React from "react";
import { Routes, Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";

const ReduxMiddleApp = () => {
	return (
		<Routes>
			<Route path="/" element={<PostListPage />} />
			<Route path="/:id" element={<PostPage />} />
		</Routes>
	);
};

export default ReduxMiddleApp;
