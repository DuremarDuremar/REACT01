import React, { useState, useEffect } from "react";
////ROUTER/////
import { Link } from "react-router-dom";
////COMPONENTS///
import TodoHeader from "./todoHeader/todoHeader";
import TodoSearch from "./todoSearch/todoSearch";
import TodoList from "./todoList/todoList";
import TodoAdd from "./todoAdd/todoAdd";
////STILE/////
import "./todo.scss";
import "./todoAdaptive.scss";
///////////////////
const Todo = () => {
  const [dataTodo, setDataTodo] = useState([
    { label: "Drink cofee", id: 1, done: false, important: false },
    { label: "Make Awesome App", id: 2, done: false, important: false },
    { label: "Have a Lunch", id: 3, done: false, important: false },
  ]);

  // const [maxId, setMaxId] = useState(100);
  const [value, setValue] = useState("");
  const [todoFilter, setTodoFilter] = useState("all");

  //////////////LOCAL STORAGE//////////////////////
  useEffect(() => {
    const localTodo = localStorage.getItem("dataTodo") || "[]";
    setDataTodo(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    localStorage.setItem("dataTodo", JSON.stringify(dataTodo));
  }, [dataTodo]);

  //////SEARCH/////////////////////////////////
  const todoSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  /////////////FILTER/////////////////////////////////////////

  const todoFilters = (arr) => {
    const arr2 = arr.filter(function (item) {
      switch (todoFilter) {
        case "all":
          return item;
        case "active":
          return item.done === false;
        case "done":
          return item.done === true;
        default:
          return item;
      }
    });
    return arr2;
  };

  const newData = todoFilters(todoSearch(dataTodo, value));
  //////////////COUNTER////////////////////////////

  const counterTodoDone = function () {
    const counter = dataTodo.filter(function (item) {
      return item.done;
    });
    return counter.length;
  };

  const counterTodo = dataTodo.length - counterTodoDone();

  /////////////ADD///////////////////////////

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const todoAdd = (text) => {
    const newDataTodo = [
      ...dataTodo,
      {
        label: text,
        id: getRandomInt(4, 3400) + getRandomInt(2, 3400),
        done: false,
        important: false,
      },
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
          <TodoSearch
            value={value}
            setValue={setValue}
            setTodoFilter={setTodoFilter}
          />
          <TodoList
            data={newData}
            todoDeleted={todoDeleted}
            onToogleDone={onToogleDone}
            onToogleImportant={onToogleImportant}
          />
        </div>
        <TodoAdd todoAdd={todoAdd} />
        <Link className="todo__exit" to="/">
          <i className="fas fa-external-link-alt fa-4x"></i>
        </Link>
      </div>
    </div>
  );
};

export default Todo;
