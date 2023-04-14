import "../../styles/post/post.css";
import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/feed/actions";
import { ModalEdit } from "../modal/edit";
import { ModalRemove } from "../modal/delete";

export const PostList = () => {
  const { posts } = useSelector((rootReducer) => rootReducer.feedReducer);
  const dispatch = useDispatch();

  // const getPosts = async () => {
  //   const res = await api.get();
  //   const data = await res.data.results.json();
  //   setPosts(data);
  //   // console.log(posts)
  // };

  // const handleEdit = (id,title, content) => {
  //   api
  //     .patch(
  //       api.baseURL + id + "/",
  //       {
  //         title: title,
  //         content: content,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));

  //     return <ModalEdit content={content} title={title} />
  // }
  // const handleDelete = (id) => {
  //   api
  //     .delete(
  //       api.baseURL + id + "/",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="container-posts-list">
           <Post  />;
    </div>
  );
};
