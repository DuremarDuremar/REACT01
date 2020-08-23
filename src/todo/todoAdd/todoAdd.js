import React, { useState } from "react";
import "./todoAdd.scss";

const TodoAdd = ({ todoAdd }) => {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    todoAdd(todoText);
    setTodoText("");
  };

  const onLabelAdd = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="todo__add">
      <form className="todo__add_form" onSubmit={onSubmit}>
        <input type="text" onChange={onLabelAdd} value={todoText}></input>
        <button>
          <i className="far fa-bell fa-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
