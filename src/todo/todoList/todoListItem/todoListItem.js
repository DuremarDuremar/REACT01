import React from "react";
import "./todoListItem.scss";

const TodoListItem = ({ label, important }) => {
  const style = { color: important ? "tomato" : "black" };

  return (
    <div className="todo__item" style={style}>
      <span>{label}</span>
      <button className="todo__delete">
        <i className="far fa-bell-slash"></i>
      </button>
      <button className="todo__important">
        <i className="fas fa-exclamation"></i>
      </button>
    </div>
  );
};

export default TodoListItem;
