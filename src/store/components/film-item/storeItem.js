import React from "react";
import "./storeItem.scss";

const StoreItem1 = ({ film }) => {
  return (
    <>
      <img src={film.image} alt="" />
      <div className="store__home_info">
        <div>{film.title}</div>
        <div>
          {film.year}, {film.author}
        </div>
        <div>{film.country}</div>
        <h4>$ {film.price}</h4>
        <button className="store__home_btn-item">Add to Cart</button>
      </div>
    </>
  );
};

const StoreItem2 = ({ film }) => {
  return (
    <>
      <div className="store__home_info">
        <div>{film.title}</div>
        <div>
          {film.year}, {film.author}
        </div>
        <div>{film.country}</div>
        <h4>$ {film.price}</h4>
        <button className="store__home_btn-item">Add to Cart</button>
      </div>
      <img src={film.image} alt="" />
    </>
  );
};

export { StoreItem1, StoreItem2 };
