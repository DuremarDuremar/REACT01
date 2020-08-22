import React from "react";
import TodoListItem from "./todoListItem/todoListItem";

const TodoList = ({ data, todoDeleted }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <span key={id}>
        <TodoListItem {...itemProps} listDeleted={() => todoDeleted(id)} />
      </span>
    );
  });

  return <>{elements}</>;
};

export default TodoList;
