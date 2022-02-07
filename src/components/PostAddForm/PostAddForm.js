import React from "react";
import "./PostAddForm.css";
const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чём вы думаете сейчас"
        className="form-control new-post-label"
      />
      <button
        onClick={() => onAdd("hello")}
        type="submit"
        className="btn btn-outline-secondary"
      >
        Добавить
      </button>
    </div>
  );
};

export default PostAddForm;
