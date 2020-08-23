import React from "react";
import "./todoSearch.scss";

const TodoSearch = ({ value, setValue, setTodoFilter }) => {
  const onLabelSearch = (e) => {
    setValue(e.target.value);
  };

  const onButton = (text) => {
    setTodoFilter(text);
  };

  return (
    <div className="todo__search">
      <div className="todo__search_form">
        <button className="todo__search_all" onClick={() => onButton("all")}>
          <i className="fab fa-buffer fa-2x"></i>
        </button>
        <div className="todo__search_input">
          <input type="text" onChange={onLabelSearch} value={value}></input>
        </div>
        <div>
          <button
            className="todo__search_active"
            onClick={() => onButton("active")}
          >
            <i className="far fa-bookmark fa-2x"></i>
          </button>
          <button
            className="todo__search_done"
            onClick={() => onButton("done")}
          >
            <i className="fas fa-bookmark fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoSearch;
