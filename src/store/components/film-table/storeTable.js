import React from "react";
import { connect } from "react-redux";
import { filmDecrease } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import "./storeTable.scss";

const StoreTable = ({ cartItems, orderTotal, filmDecrease }) => {
  console.log(cartItems);

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
                <button onClick={() => filmDecrease(11)}> 1</button>
                <button>2</button>
                <button>3</button>
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

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return { cartItems, orderTotal };
};

const mapDispatchToProps = {
  filmDecrease,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreTable)
);
