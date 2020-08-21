import React from "react";
////COMPONENTS///
import TodoHeader from "./todoHeader/todoHeader";
import TodoSearch from "./todoSearch/todoSearch";
import TodoList from "./todoList/todoList";
////STILE/////
import "./todo.scss";
///////////////////
const Todo = () => {
  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__wrapper">
          <TodoHeader />
          <TodoSearch />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
