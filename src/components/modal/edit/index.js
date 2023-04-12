import React, { useState } from "react";
import { Button } from "../../button";
import "../../../styles/modals/edit/edit.css";

export const ModalEdit = ({ isOpen, setModalOpen, handleSave, title, setTitle, content, setContent }) => {

  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-edit-container">
          <form>
            <h1>Edit item</h1>
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
                handleClick={setModalOpen}
                name="close-btn"
                label="Cancel"
              />
              <Button type='submit' handleClick={handleSave} name="save-btn" label="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
};
