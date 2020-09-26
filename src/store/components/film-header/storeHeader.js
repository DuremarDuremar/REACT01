import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StoreHOC from "../../context/storeHOC";
import "./storeHeader.scss";

const StoreHeader = ({ cartItems, orderTotal }) => {
  console.log(cartItems);

  let itemCart = cartItems.reduce(function (total, item) {
    return total + item.count;
  }, 0);

  return (
    <div className="store__header">
      <Link to="/store">
        <h3 className="store__header_title">FilmsStore</h3>
      </Link>
      <Link to="/store/cart">
        <div className="store__header_cart">
          <i className="fas fa-shopping-cart fa-lg"></i>
          <p>
            {itemCart} items (${orderTotal})
          </p>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ filmCart: { cartItems, orderTotal } }) => {
  return { cartItems, orderTotal };
};

export default StoreHOC()(connect(mapStateToProps)(StoreHeader));
