import React from "react";
import "../../styles/post/post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,  faTrashCan } from '@fortawesome/free-regular-svg-icons'

export const Post = ({ post, handleDelete, handleEdit }) => {
  
  return (
    <div className="container-post">
      <div className="header-post">
        <h1 className="post-title">{post?.title}</h1>
        <div className="buttons-post">
        <FontAwesomeIcon onClick={handleDelete} className="icon" icon={faTrashCan} />
        <FontAwesomeIcon onClick={handleEdit} className="icon" icon={faPenToSquare} />
        </div>
      </div>
      <div className="content-container">
        <div className="content-header">
          <h1 className="post-username">@{post?.username}</h1>
        </div>
        <p className="post-content">{post?.content}</p>
      </div>
    </div>
  );
};
