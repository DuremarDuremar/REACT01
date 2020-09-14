import React from "react";
import { Link } from "react-router-dom";
import { range } from "../utils/range";

const PaginationItem = ({ page, currentPage, url }) => {
  return (
    <li>
      <Link>{page}</Link>
    </li>
  );
};

const RedPaginations = ({ total, limit, url, current }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, 50);
  console.log(pagesCount);
  return <div>pagination</div>;
};

export default RedPaginations;
