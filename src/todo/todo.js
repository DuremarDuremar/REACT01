import React, { useState } from "react";
////COMPONENTS///
import TodoHeader from "./todoHeader/todoHeader";
import TodoSearch from "./todoSearch/todoSearch";
import TodoList from "./todoList/todoList";
import TodoAdd from "./todoAdd/todoAdd";
////STILE/////
import "./todo.scss";
///////////////////
const Todo = () => {
  const [dataTodo, setDataTodo] = useState([
    { label: "Drink cofee", id: 1 },
    { label: "Make Awesome App", id: 2 },
    { label: "Have a Lunch", id: 3 },
  ]);

  const [maxId, setMaxId] = useState(100);

  const todoAdd = (text) => {
    console.log(text);
    setMaxId(maxId + 1);
    const newDataTodo = [...dataTodo, { label: text, id: maxId }];
    setDataTodo(newDataTodo);
  };

  const todoDeleted = (id) => {
    setDataTodo(
      dataTodo.filter(function (item) {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__wrapper">
          <TodoHeader />
          <TodoSearch />
          <TodoList data={dataTodo} todoDeleted={todoDeleted} />
        </div>
        <TodoAdd todoAdd={todoAdd} />
      </div>
    </div>
  );
};

export default Todo;
