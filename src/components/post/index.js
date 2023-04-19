import React, { useState } from "react";
import "../../styles/post/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { ModalEdit } from "../modal/edit";
import { ModalDelete } from "../modal/delete";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const Post = ({ post }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const username = user.username;
  const handleCancelModalEdit = () => {
    setModalEditOpen(false);
  };
  const handleCancelModalDelete = () => {
    setModalDeleteOpen(false);
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="container-post">
      <div className="header-post">
        <h1 className="post-title">{post?.title} </h1>
        {username === post.username ? (
          <div className="buttons-post">
            <FontAwesomeIcon
              onClick={() => setModalDeleteOpen(!modalDeleteOpen)}
              className="icon-delete"
              icon={faTrashCan}
            />
            <FontAwesomeIcon
              onClick={() => setModalEditOpen(!modalEditOpen)}
              className="icon-edit"
              icon={faPenToSquare}
            />
          </div>
        ) : null}
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
        <ModalDelete
          id={post?.id}
          isOpen={modalDeleteOpen}
          handleCancel={handleCancelModalDelete}
        />
      </div>
    </motion.div>
  );
};
