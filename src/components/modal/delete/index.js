import React from "react";
import { Button } from "../../button";
import { deletePosts } from "../../../actions/feed/actions";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/modals/delete/delete.css";

export const ModalDelete = ({ isOpen, id, handleCancel }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePosts(id));
    toast.info("deleted post", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
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
          <div className="modal-remove-container">
            <div className="header-delete-modal">
              <h1 className="modal-title">
                Are you sure you want to delete this item?
              </h1>
            </div>
            <div className="container-btn">
              <Button
                handleClick={handleCancel}
                name="cancel-btn"
                label="Cancel"
              />
              <Button
                handleClick={handleDelete}
                name="delete-btn"
                label="Delete"
              />
            </div>
          </div>
          <ToastContainer />
        </motion.div>
      ) : null}
    </>
  );
};
