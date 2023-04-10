import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { api } from "../../services/api/api";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await api.get();
    const data = await res.data.results;
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, [posts]);
  return (
    <div className="container-posts-list">
      {posts &&
        posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
    </div>
  );
};
