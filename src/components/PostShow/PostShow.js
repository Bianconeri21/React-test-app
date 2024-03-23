import { useState, useCallback } from "react";

import Modal from "../Modal/Modal";

import "./postShow.css";

const PostShow = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => setShowModal(true), []);
  const handleClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <div className="post-card" onClick={handleClick}>
        <img
          className="post-card-image"
          src={post.img}
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          alt="Post"
        />
        <div className="post-card-info">
          <p className="post-card-tags">{post.tags}</p>
          <h2 className="post-card-title">{post.title}</h2>
          <div className="post-card-author-date-views">
            <span className="post-card-author">{post.autor}</span>
            <div className="dot-separator"></div>
            <span className="post-card-date-view">{post.date}</span>
            <div className="dot-separator"></div>
            <span className="post-card-date-view">{post.views} Views</span>
          </div>
          <div className="post-card-text">{post.text}</div>
        </div>
      </div>
      {showModal && <Modal onClose={handleClose} post={post} />}
    </>
  );
};

export default PostShow;
