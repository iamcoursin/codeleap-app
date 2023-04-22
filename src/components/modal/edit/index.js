import React, { useState } from "react";
import { Button } from "../../button";
import "../../../styles/modals/edit/edit.css";
import { useDispatch } from "react-redux";
import { editPosts } from "../../../actions/feed/actions";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ModalEdit = ({ isOpen, id, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editPosts(id, content, title));
    toast.success("successfully edited", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    handleCancel();
    setContent("");
    setTitle("");
  };
  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="background-modal"
        >
          <div className="modal-edit-container">
            <div className="header-modal">
              <h1 className="edit-title">Edit item</h1>
            </div>
            <div className="content-container">
              <form>
                <label className="label-box" htmlFor="title">
                  Title
                </label>
                <input
                  maxLength="30"
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

                <div className="container-btn">
                  <Button
                    handleClick={handleCancel}
                    name="close-btn"
                    label="Cancel"
                  />
                  <Button
                    handleClick={handleEdit}
                    name="save-btn"
                    label="Save"
                  />
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </motion.div>
      ) : null}
    </>
  );
};
