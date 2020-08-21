import React, { useState } from "react";
////COMPONENTS///
import TodoHeader from "./todoHeader/todoHeader";
import TodoSearch from "./todoSearch/todoSearch";
import TodoList from "./todoList/todoList";
////STILE/////
import "./todo.scss";
///////////////////
const Todo = () => {
  const [dataTodo, setDataTodo] = useState([
    { label: "Drink cofee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a Lunch", important: false, id: 3 },
  ]);

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__wrapper">
          <TodoHeader />
          <TodoSearch />
          <TodoList data={dataTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
