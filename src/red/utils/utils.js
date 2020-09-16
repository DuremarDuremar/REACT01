import { parse } from "query-string";

export const range = (start, end) => {
  // из массива с пустыми элементами берем индексы и прибовляем начальный индекс (25)
  return [...Array(end).keys()].map((el) => el + start);
};

// лтмит постов на одной с странице (25)
export const limit = 10;

// используя библиотеку query-string, парсим (25)
export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
  // offset это сколько постов уже отдано (25)
  const offset = currentPage * 10 - limit;
  return { currentPage, offset };
};
