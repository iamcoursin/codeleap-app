import React, { useState }  from "react";
import "../../styles/post/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { deletePosts } from "../../actions/feed/actions";
import { ModalEdit } from "../modal/edit";
import { ModalRemove } from "../modal/delete";
export const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id) => {
    dispatch(deletePosts(id));
  };
  const handleCancelModalEdit = () => {
       setIsOpen(false);
  };
  return (
    <div className="container-post">
      <div className="header-post">
        <h1 className="post-title">{post?.title} </h1>
        <div className="buttons-post">
          <FontAwesomeIcon
            onClick={() => handleDelete(post?.id)}
            className="icon"
            icon={faTrashCan}
          />
          <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className="icon" icon={faPenToSquare} />
        </div>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1 className="post-username">@{post?.username}</h1>
        </div>
        <p className="post-content">{post?.content}</p>
        <ModalEdit handleCancel={handleCancelModalEdit} isOpen={isOpen} id={post?.id}  />
        <ModalRemove />
      </div>
    </div>
  );
};
