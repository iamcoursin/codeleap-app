import React, { useState } from "react";
import { Button } from "../../button";
import "../../../styles/modals/edit/edit.css";
import { useDispatch } from "react-redux";
import { editPosts } from "../../../actions/feed/actions";

export const ModalEdit = ({ isOpen, id, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editPosts(id, content, title));
    handleCancel();
    setContent("");
    setTitle("");
  };

  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-edit-container">
          <form>
            <h1>Edit item: {id}</h1>
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

            <div className="container-btn">
              <Button
                handleClick={handleCancel}
                name="close-btn"
                label="Cancel"
              />
              <Button handleClick={handleEdit} name="save-btn" label="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
};
