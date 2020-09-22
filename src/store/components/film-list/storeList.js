import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filmLoaded, filmRequested, filmError } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { StoreItem1, StoreItem2 } from "../film-item/storeItem";
import ErrorIndicator from "../../../error/error-indicator";
import "./storeList.scss";

const StoreList = ({
  films,
  loading,
  error,
  StoreServer,
  filmLoaded,
  filmRequested,
  filmError,
}) => {
  useEffect(() => {
    filmRequested();
    StoreServer.getStoreServer()
      .then((data) => {
        filmLoaded(data);
      })
      .catch((err) => {
        filmError(err);
      });
  }, [StoreServer, filmLoaded, filmRequested, filmError]);

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  return (
    <>
      {loading ? (
        <div>Loaded</div>
      ) : (
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
      )}
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
          <div className="store__home_total">
            <h5>$213</h5>
            <button>Checkout</button>
          </div>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ films, loading, error }) => {
  return { films, loading, error };
};

const mapDispatchToProps = {
  filmLoaded,
  filmRequested,
  filmError,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
