import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";

const PostPage = () => {
	const { id } = useParams(); // URL 파라미터 조회
	return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
