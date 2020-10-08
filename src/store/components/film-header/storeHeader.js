import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import StoreHOC from "../../context/storeHOC";
import "./storeHeader.scss";

const StoreHeader = ({ cartItems, orderTotal, isLogin, name }) => {
  let itemCart = cartItems.reduce(function (total, item) {
    return total + item.count;
  }, 0);

  // console.log(isLogin);

  return (
    <div className="store__header">
      <Link to="/store">
        <h3 className="store__header_title">FilmsStore</h3>
      </Link>
      {isLogin === true ? (
        <Link to="/store/cart">
          <h2>{name}</h2>
          <div className="store__header_cart">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <p>
              {itemCart} items (${orderTotal})
            </p>
          </div>
        </Link>
      ) : (
        <>
          <NavLink className="store__navLink" to="/store/login">
            <h6>Sign in</h6>
          </NavLink>
          <NavLink className="store__navLink" to="/store/register">
            <h6>Sign up</h6>
          </NavLink>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({
  filmCart: { cartItems, orderTotal },
  authentication: { isLogin, name },
}) => {
  return { cartItems, orderTotal, isLogin, name };
};

export default StoreHOC()(connect(mapStateToProps)(StoreHeader));
