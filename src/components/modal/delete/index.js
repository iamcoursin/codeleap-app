import React from "react";
import "../../../styles/modals/delete/delete.css";
import { Button } from "../../button";
import { deletePosts } from "../../../actions/feed/actions";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export const ModalDelete = ({ isOpen, id, handleCancel }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePosts(id));
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
        </motion.div>
      ) : null}
    </>
  );
};
