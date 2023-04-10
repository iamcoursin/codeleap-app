import React from "react";
import "../../../styles/modals/delete/delete.css";
import { Button } from "../../button";

export const ModalRemove = ({ isOpen, setModalOpen, handleRemove }) => {
  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-remove-container">
          <h1>Are you sure you want to delete this item?</h1>

          <div className="container-btn">
            <Button
              handleClick={setModalOpen}
              name="close-btn"
              label="Cancel"
            />
            <Button
              handleClick={handleRemove}
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
