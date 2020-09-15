import React from "react";
import { Link } from "react-router-dom";
import { range } from "../utils/utils";
import classNames from "classnames";
import "./redPagination.scss";

const PaginationItem = ({ page, currentPage, url }) => {
  const liClasses = classNames({
    red__pagination_item: true,
    active: currentPage === page,
  });

  console.log(liClasses);
  console.log(currentPage);

  return (
    <li className={liClasses}>
      <Link to={`${url}?=${page}`} className="red__pagination_link">
        {page}
      </Link>
    </li>
  );
};

const RedPaginations = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
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
