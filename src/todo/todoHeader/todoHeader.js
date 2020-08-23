import React from "react";
import "./todoHeader.scss";

const TodoHeader = ({ counterTodo, counterTodoDone }) => {
  return (
    <div className="todo__header">
      <h1>Todo List</h1>
      <p>
        {counterTodo} more to do, {counterTodoDone()} done
      </p>
    </div>
  );
};

export default TodoHeader;
