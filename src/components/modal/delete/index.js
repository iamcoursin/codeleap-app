import React from "react";
import "../../../styles/modals/delete/delete.css";
import { Button } from "../../button";
import { deletePosts } from "../../../actions/feed/actions";
import { useDispatch } from "react-redux";

export const ModalDelete = ({ isOpen, id, handleCancel }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePosts(id));
  };
  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-remove-container">
          <h1 className="modal-title" >Are you sure you want to delete this item?</h1>
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
      </div>
    );
  }
  return null;
};
