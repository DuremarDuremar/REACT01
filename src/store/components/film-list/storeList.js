import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filmLoaded } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { StoreItem1, StoreItem2 } from "../film-item/storeItem";
import "./storeList.scss";

const StoreList = ({ films, StoreServer, filmLoaded }) => {
  useEffect(() => {
    const data = StoreServer.getStoreServer();
    filmLoaded(data);
  }, [StoreServer, filmLoaded]);

  return (
    <>
      <ul className="store__home_list">
        {films.map((film, index) => {
          if (index % 2 !== 0) {
            return (
              <li key={film.id} className="store__home_item1">
                <StoreItem1 film={film} />
              </li>
            );
          } else {
            return (
              <li key={film.id} className="store__home_item2">
                <StoreItem2 film={film} />
              </li>
            );
          }
        })}
      </ul>
      <div className="store__home_scroll">
        <h3 className="store__home_title">Your Order</h3>
        <ul className="store__home_table">
          <li>
            <span>#</span>
            <span>Item</span>
            <span>Count</span>
            <span>Price</span>
            <span>Action</span>
          </li>
          <li>
            <span>1</span>
            <span>Бойцовая рыбка</span>
            <span>2</span>
            <span>$10</span>
            <span className="store__home_wrap-btn">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </span>
          </li>
          <li>
            <span>2</span>
            <span>Седьмая печать</span>
            <span>1</span>
            <span>$12</span>
            <span className="store__home_wrap-btn">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ films }) => {
  return { films };
};

const mapDispatchToProps = {
  filmLoaded,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
