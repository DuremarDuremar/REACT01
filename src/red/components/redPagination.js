import React from "react";
import { Link } from "react-router-dom";
import { range } from "../utils/range";
import "./redPagination.scss";

const PaginationItem = ({ page, currentPage, url }) => {
  return (
    <li className="red__pagination_item">
      <Link className="red__pagination_link" to={`${url}?=${page}`}>
        {page}
      </Link>
    </li>
  );
};

const RedPaginations = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, 50);
  return (
    <ul className="red__pagination">
      {pages.map((page) => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          url={url}
        />
      ))}
    </ul>
  );
};

export default RedPaginations;
