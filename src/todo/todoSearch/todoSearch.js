import React from "react";
import "./todoSearch.scss";

const TodoSearch = () => {
  return (
    <div className="todo__search">
      <div className="todo__search_form">
        <button className="todo__search_all">1</button>
        <div className="todo__search_input">
          <input></input>
        </div>
        <div>
          <button className="todo__search_active">2</button>
          <button className="todo__search_done">3</button>
        </div>
      </div>
    </div>
  );
};

export default TodoSearch;
