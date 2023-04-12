import React, { useState } from "react";
import { Button } from "../button";
import { api } from "../../services/api/api";
import "../../styles/box-created-post/box-created-post.css";

export const Box = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = JSON.parse(localStorage.getItem("user"));
  const handlePost = async (e) => {
    e.preventDefault();
    await api
      .post(
        api[0],
        {
          username: user.username,
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
  };

  return (
    <form onSubmit={handlePost}>
      <div className="container-box">
        <h1>What's on your mind?</h1>
        <p>{user.username}</p>
        <label className="label-box" htmlFor="title">
          Title
        </label>
        <input
          placeholder="Hellow world"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="label-box" htmlFor="content">
          Content
        </label>
        <textarea
          placeholder="Content here..."
          value={content}
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <Button name="button-box-post" label="Create" type="submit" />
      </div>
    </form>
  );
};
