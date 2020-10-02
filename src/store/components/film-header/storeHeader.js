import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StoreHOC from "../../context/storeHOC";
import "./storeHeader.scss";

const StoreHeader = ({ cartItems, orderTotal, isLogin }) => {
  let itemCart = cartItems.reduce(function (total, item) {
    return total + item.count;
  }, 0);

  console.log(isLogin);

  return (
    <div className="store__header">
      <Link to="/store">
        <h3 className="store__header_title">FilmsStore</h3>
      </Link>
      {isLogin === true ? (
        <Link to="/store/cart">
          <div className="store__header_cart">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <p>
              {itemCart} items (${orderTotal})
            </p>
          </div>
        </Link>
      ) : (
        <Link to="/store/login">
          <h6>Sign in</h6>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = ({
  filmCart: { cartItems, orderTotal },
  authentication: { isLogin },
}) => {
  return { cartItems, orderTotal, isLogin };
};

export default StoreHOC()(connect(mapStateToProps)(StoreHeader));
