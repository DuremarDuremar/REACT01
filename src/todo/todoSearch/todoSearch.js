import React, { useState } from "react";
import "./todoSearch.scss";

const TodoSearch = ({ value, setValue, todoFilter, setTodoFilter }) => {
  const [classBtn, setClassBtn] = useState([
    { id: "all", className: "todo__btn_active" },
    { id: "active", className: "" },
    { id: "done", className: "" },
  ]);

  const onLabelSearch = (e) => {
    setValue(e.target.value);
  };

  const onButton = (text) => {
    setTodoFilter(text);
    setClassBtn(
      classBtn.map(function (item) {
        if (item.id === text) {
          item.className = "todo__btn_active";
        } else {
          item.className = "";
        }
        return item;
      })
    );
  };

  return (
    <div className="todo__search">
      <div className="todo__search_form">
        <button
          className={classBtn[0].className}
          id={classBtn[0].id}
          onClick={() => onButton("all")}
        >
          <i className="fab fa-buffer fa-2x"></i>
        </button>
        <div className="todo__search_input">
          <input type="text" onChange={onLabelSearch} value={value}></input>
        </div>
        <div>
          <button
            className={classBtn[1].className}
            id={classBtn[1].id}
            onClick={() => onButton("active")}
          >
            <i className="far fa-bookmark fa-2x"></i>
          </button>
          <button
            className={classBtn[2].className}
            id={classBtn[2].id}
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
