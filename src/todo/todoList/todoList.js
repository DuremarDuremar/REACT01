import React from "react";
import TodoListItem from "./todoListItem/todoListItem";

const TodoList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <span key={item.id}>
        <TodoListItem {...itemProps} />
      </span>
    );
  });

  return <>{elements}</>;
};

export default TodoList;
