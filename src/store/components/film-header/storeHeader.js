import React from "react";
import "./storeHeader.scss";
import { Link } from "react-router-dom";

const StoreHeader = () => {
  return (
    <div className="store__header">
      <Link to="/store">
        <h3 className="store__header_title">FilmsStore</h3>
      </Link>
      <Link to="/store/cart">
        <div className="store__header_cart">
          <i className="fas fa-shopping-cart fa-lg"></i>
          <p>5 items ($200)</p>
        </div>
      </Link>
    </div>
  );
};

export default StoreHeader;
