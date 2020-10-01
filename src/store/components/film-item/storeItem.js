import React from "react";
import "./storeItem.scss";

const StoreItem2 = ({ film, onAddedToCart }) => {
  return (
    <>
      <img src={film.image} alt="" />
      <div className="store__home_info">
        <h3>{film.title}</h3>
        <div>
          {film.year}, {film.author}
        </div>
        <div>{film.country}</div>
        <h4>$ {film.price}</h4>
        <button onClick={onAddedToCart} className="store__home_btn-item">
          Add to Cart
        </button>
      </div>
    </>
  );
};

const StoreItem1 = ({ film, onAddedToCart }) => {
  return (
    <>
      <div className="store__home_info">
        <h3>{film.title}</h3>
        <div>
          {film.year}, {film.author}
        </div>
        <div>{film.country}</div>
        <h4>$ {film.price}</h4>
        <button onClick={onAddedToCart} className="store__home_btn-item">
          Add to Cart
        </button>
      </div>
      <img src={film.image} alt="" />
    </>
  );
};

export { StoreItem1, StoreItem2 };
