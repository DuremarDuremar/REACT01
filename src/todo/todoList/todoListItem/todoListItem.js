import React, { useState } from "react";
import "./todoListItem.scss";

const TodoListItem = ({ label, listDeleted }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);

  const classImportant = important ? "todo__change_important" : "";
  const classDone = done ? " todo__change_done" : "";
  const classLabel = classImportant + classDone;

  return (
    <div className="todo__item">
      <span className={classLabel} onClick={() => setDone(!done)}>
        {label}
      </span>
      <button className="todo__delete" onClick={listDeleted}>
        <i className="far fa-bell-slash"></i>
      </button>
      <button
        className="todo__important"
        onClick={() => setImportant(!important)}
      >
        <i className="fas fa-exclamation"></i>
      </button>
    </div>
  );
};

export default TodoListItem;
