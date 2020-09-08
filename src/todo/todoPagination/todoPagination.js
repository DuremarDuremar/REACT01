import React from "react";
import "./todoPagination.scss";

const TodoPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const str = () => {
    return pageNumbers.map((number) => (
      <span key={number} className="todo__page_item">
        <p
          onClick={(event) => paginate(event.target.title)}
          className={
            number === Number(currentPage)
              ? "todo__page_link todo__link_active"
              : "todo__page_link"
          }
          title={number}
        >
          {number}
        </p>
      </span>
    ));
  };

  return <div className="todo__pagination">{str()}</div>;
};

export default TodoPagination;
