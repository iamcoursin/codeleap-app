import React, { useState } from "react";
import "../../styles/post/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { ModalEdit } from "../modal/edit";
import { ModalRemove } from "../modal/delete";
export const Post = ({ post }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const handleCancelModalEdit = () => {
    setModalEditOpen(false);
  };
  const handleCancelModalDelete = () => {
    setModalDeleteOpen(false);
  };
  return (
    <div className="container-post">
      <div className="header-post">
        <h1 className="post-title">{post?.title} </h1>
        <div className="buttons-post">
          <FontAwesomeIcon
            onClick={() => setModalDeleteOpen(!modalDeleteOpen)}
            className="icon"
            icon={faTrashCan}
          />
          <FontAwesomeIcon
            onClick={() => setModalEditOpen(!modalEditOpen)}
            className="icon"
            icon={faPenToSquare}
          />
        </div>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1 className="post-username">@{post?.username}</h1>
        </div>
        <p className="post-content">{post?.content}</p>
        <ModalEdit
          handleCancel={handleCancelModalEdit}
          isOpen={modalEditOpen}
          id={post?.id}
        />
        <ModalRemove
          id={post?.id}
          isOpen={modalDeleteOpen}
          handleCancel={handleCancelModalDelete}
        />
      </div>
    </div>
  );
};
