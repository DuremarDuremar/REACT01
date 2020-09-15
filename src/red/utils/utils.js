import { parse } from "query-string";

export const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const limit = 10;

export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  // return { currentPage, offset };
  return 1;
};
