import React, { useEffect } from "react";
import "../../styles/post/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { deletePosts, getPosts } from "../../actions/feed/actions";

//refatorar esse código e colocar ele no component post-list
export const Post = ({ post }) => {
  const { posts } = useSelector((rootReducer) => rootReducer.feedReducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePosts(id));
  };
  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);
  return (
    <>
      {posts &&
        Array.from(posts).map((post, index) => {
          return (
            <div key={index} className="container-post">
              <div className="header-post">
                {console.log(post)}
                <h1 className="post-title">{post?.title} </h1>
                <div className="buttons-post">
                  <FontAwesomeIcon
                    onClick={() => handleDelete(post.id)}
                    className="icon"
                    icon={faTrashCan}
                  />
                  <FontAwesomeIcon className="icon" icon={faPenToSquare} />
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
        })}
    </>
  );
};
