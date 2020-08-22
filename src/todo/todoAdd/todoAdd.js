import React from "react";
import "./todoAdd.scss";

const TodoAdd = ({ todoAdd }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="todo__add">
      <form className="todo__add_form" onSubmit={onSubmit}>
        <input></input>
        <button onClick={() => todoAdd("Run")}>
          <i className="far fa-bell fa-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
