import React from "react";
import "./storeItem.scss";

const StoreItem = ({ film }) => {
  console.log(film);

  return (
    <>
      <img src={film.image} alt="" />
      <div className="store__home_info">
        <div>{film.title}</div>
        <div>
          {film.year}, {film.author}
        </div>
        <div>{film.country}</div>
        <button className="store__home_btn-item">Add to Cart</button>
      </div>
    </>
  );
};

export default StoreItem;
