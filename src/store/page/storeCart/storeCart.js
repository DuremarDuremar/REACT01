import React, { useState } from "react";
import { connect } from "react-redux";
import { filmDelete } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import "./storeCart.scss";

const StoreCart = ({ cartItems, orderTotal, films }) => {
  return (
    <div className="store__cart">
      <div className="store__cart_slider">
        {cartItems.map((item) => {
          return (
            <div className="store__cart_item" key={item.id}>
              <h4>{item.name}</h4>

              <div className="store__cart_img">
                <span className="store__cart_price">
                  ${item.price * item.count}
                </span>
                <img src={item.image} alt={item.name} />
                <span className="store__cart_count">{item.count} шт</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  filmList: { films },
  filmCart: { cartItems, orderTotal },
}) => {
  return { films, cartItems, orderTotal };
};

const mapDispatchToProps = {
  filmDelete,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreCart)
);
