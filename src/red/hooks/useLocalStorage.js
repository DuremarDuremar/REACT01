import { useState, useEffect } from "react";

export default (key, initValue = "") => {
  //берем начальное значение из LocalStorage, если оно есть (17)
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initValue;
  });

  //если значение меняеться записываем его в LocalStorage (17)
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
