import { useEffect } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = ({ onClose, post }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal">
        <span onClick={onClose} className="modal-close">
          &times;
        </span>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
