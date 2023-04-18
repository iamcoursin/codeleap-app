import React, { useState, useEffect } from "react";
import { Button } from "../button";
import "../../styles/box-created-post/box-created-post.css";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "../../actions/feed/actions";

export const Box = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch();
  const handlePost = (e) => {
    e.preventDefault();
    const username = user.username;
    dispatch(addPosts(username, title, content));
    setContent("");
    setTitle("");
  };

  useEffect(() => {
    const buttonIsDisable = () => {
      if (title === "" || content === "") {
        return setIsDisable(true);
      } else if (title === "" && content === "") {
        return setIsDisable(true);
      }
      return setIsDisable(false);
    };
    buttonIsDisable();
  }, [title, content, isDisable]);

  return (
    <form onSubmit={handlePost}>
      <div className="container-box">
        <h1>What's on your mind?</h1>
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
          rows="5"
          maxlength="500"
          placeholder="Content here..."
          value={content}
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        {isDisable ? (
          <Button
            isDisable={isDisable}
            name="button-box-post-disable"
            label="CREATE"
            type="submit"
          />
        ) : (
          <Button
            isDisable={isDisable}
            name="button-box-post"
            label="CREATE"
            type="submit"
          />
        )}
      </div>
    </form>
  );
};
