import React from "react";

const StoreItem = ({ film }) => {
  console.log(film);

  return (
    <>
      <span>{film.title}</span>
      <span>{film.author}</span>
    </>
  );
};

export default StoreItem;
