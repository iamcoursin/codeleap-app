import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { api } from "../../services/api/api";
import '../../styles/post/post.css'
import { ModalEdit } from "../modal/edit";
import { ModalRemove } from "../modal/delete";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await api.get();
    const data = await res.data.results;
    setPosts(data);
  };

  const handleEdit = (id,title, content) => {
    api
      .patch(
        api.baseURL + id + "/",
        {
          title: title,
          content: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

      return <ModalEdit content={content} title={title} />
  }
  const handleDelete = (id) => {
    api
      .delete(
        api.baseURL + id + "/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
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
