import React from "react";
export const ModalEdit = ({ isOpen }) => {
  if (isOpen) {
    <div className="modal-edit-container">
      <h1>Você deseja excluir?</h1>
    </div>
  }
  return null;
};
