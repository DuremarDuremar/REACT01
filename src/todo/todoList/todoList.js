import React from "react";
import TodoListItem from "./todoListItem/todoListItem";

const TodoList = ({
  todoDeleted,
  onToogleDone,
  onToogleImportant,
  currentPosts,
}) => {
  const elements = currentPosts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <span key={id}>
        <TodoListItem
          {...itemProps}
          listDeleted={() => todoDeleted(id)}
          onDone={() => onToogleDone(id)}
          onImportant={() => onToogleImportant(id)}
        />
      </span>
    );
  });

  return <>{elements}</>;
};

export default TodoList;
