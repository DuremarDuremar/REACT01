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
    { label: "Drink cofee", id: 1, done: false, important: false },
    { label: "Make Awesome App", id: 2, done: false, important: false },
    { label: "Have a Lunch", id: 3, done: false, important: false },
  ]);

  const [maxId, setMaxId] = useState(100);
  const [value, setValue] = useState("");

  //////SEARCH/////////////////////////////////
  const todoFilter = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
  const newData = todoFilter(dataTodo, value);

  //////////////COUNTER////////////////////////////

  const counterTodoDone = function () {
    const counter = dataTodo.filter(function (item) {
      return item.done;
    });
    return counter.length;
  };

  const counterTodo = dataTodo.length - counterTodoDone();

  /////////////ADD///////////////////////////

  const todoAdd = (text) => {
    setMaxId(maxId + 1);
    const newDataTodo = [
      ...dataTodo,
      { label: text, id: maxId, done: false, important: false },
    ];
    setDataTodo(newDataTodo);
  };

  ////////DELETED///////////////////////////////////////

  const todoDeleted = (id) => {
    setDataTodo(
      dataTodo.filter(function (item) {
        return item.id !== id;
      })
    );
  };

  ///////////////TOGGLE///////////////////////////////////////

  const onToogleDone = (id) => {
    setDataTodo(
      dataTodo.map(function (item) {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  const onToogleImportant = (id) => {
    setDataTodo(
      dataTodo.map(function (item) {
        if (item.id === id) {
          item.important = !item.important;
        }
        return item;
      })
    );
  };

  /////////////////////////////////////////////////

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__wrapper">
          <TodoHeader
            counterTodo={counterTodo}
            counterTodoDone={counterTodoDone}
          />
          <TodoSearch value={value} setValue={setValue} />
          <TodoList
            data={newData}
            todoDeleted={todoDeleted}
            onToogleDone={onToogleDone}
            onToogleImportant={onToogleImportant}
          />
        </div>
        <TodoAdd todoAdd={todoAdd} />
      </div>
    </div>
  );
};

export default Todo;
