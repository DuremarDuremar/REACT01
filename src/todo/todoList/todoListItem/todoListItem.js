import React from "react";
import "./todoListItem.scss";

const TodoListItem = () => {
  return (
    <div className="todo__item">
      <span>Drink Coffe</span>
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
