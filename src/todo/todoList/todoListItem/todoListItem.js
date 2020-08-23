import React, { useState } from "react";
import "./todoListItem.scss";

const TodoListItem = ({
  label,
  important,
  done,
  listDeleted,
  onDone,
  onImportant,
}) => {
  const classImportant = important ? "todo__change_important" : "";
  const classDone = done ? " todo__change_done" : "";
  const classLabel = classImportant + classDone;

  return (
    <div className="todo__item">
      <span className={classLabel} onClick={onDone}>
        {label}
      </span>
      <button className="todo__delete" onClick={listDeleted}>
        <i className="far fa-bell-slash"></i>
      </button>
      <button className="todo__important" onClick={onImportant}>
        <i className="fas fa-exclamation"></i>
      </button>
    </div>
  );
};

export default TodoListItem;
