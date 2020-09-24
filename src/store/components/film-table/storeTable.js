import React from "react";
import { connect } from "react-redux";
import { filmDecrease, filmIncrease, filmDelete } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import "./storeTable.scss";

const StoreTable = ({
  cartItems,
  orderTotal,
  filmDecrease,
  filmIncrease,
  filmDelete,
}) => {
  return (
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
        {cartItems.map((item, index) => {
          return (
            <li key={item.id}>
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.count}</span>
              <span>${item.price * item.count}</span>
              <span className="store__home_wrap-btn">
                <button onClick={() => filmDecrease(item)}>
                  <i className="fas fa-minus fa-lg"></i>
                </button>
                <button onClick={() => filmIncrease(item)}>
                  <i className="fas fa-plus fa-lg"></i>
                </button>
                <button onClick={() => filmDelete(item)}>
                  <i className="far fa-window-close fa-lg"></i>
                </button>
              </span>
            </li>
          );
        })}

        <div className="store__home_total">
          <h5>${orderTotal}</h5>
          <button>Checkout</button>
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ filmCart: { cartItems, orderTotal } }) => {
  return { cartItems, orderTotal };
};

const mapDispatchToProps = {
  filmDecrease,
  filmIncrease,
  filmDelete,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreTable)
);
