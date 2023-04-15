import "../../styles/post/post.css";
import React, { useEffect } from "react";
import { Post } from "../../components/post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/feed/actions";


export const PostList = () => {
  const { posts } = useSelector((rootReducer) => rootReducer.feedReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);
  return (
    <div className="container-posts-list">
           {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};
