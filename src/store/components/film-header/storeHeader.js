import React from "react";
import "./storeHeader.scss";

const StoreHeader = () => {
  return (
    <div className="store__header">
      <h3 className="store__header_title">FilmsStore</h3>
      <div className="store__header_cart">
        <i className="fas fa-shopping-cart fa-lg"></i>
        <p>5 items ($200)</p>
      </div>
    </div>
  );
};

export default StoreHeader;
