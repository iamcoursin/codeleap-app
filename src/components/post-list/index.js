import "../../styles/post/post.css";
import React, { useEffect } from "react";
import { Post } from "../../components/post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/feed/actions";
import { motion } from "framer-motion";

export const PostList = () => {
  const { posts } = useSelector((rootReducer) => rootReducer.feedReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-post-list"
    >
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </motion.div>
  );
};
