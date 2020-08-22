import React, { useState, useContext } from "react";
////COMPONENTS///
import TodoHeader from "./todoHeader/todoHeader";
import TodoSearch from "./todoSearch/todoSearch";
import TodoList from "./todoList/todoList";
////STILE/////
import "./todo.scss";
///////////////////
const Todo = () => {
  const [dataTodo, setDataTodo] = useState([
    { label: "Drink cofee", id: 1 },
    { label: "Make Awesome App", id: 2 },
    { label: "Have a Lunch", id: 3 },
  ]);

  // const { id } = dataTodo;

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__wrapper">
          <TodoHeader />
          <TodoSearch />
          <TodoList data={dataTodo} todoDeleted={(id) => console.log(44, id)} />
        </div>
      </div>
    </div>
  );
};

export default Todo;

export const todoData = React.createContext();
