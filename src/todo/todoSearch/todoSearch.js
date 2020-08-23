import React from "react";
import "./todoSearch.scss";

const TodoSearch = ({ value, setValue }) => {
  const onLabelSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="todo__search">
      <div className="todo__search_form">
        <button className="todo__search_all">1</button>
        <div className="todo__search_input">
          <input type="text" onChange={onLabelSearch} value={value}></input>
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
