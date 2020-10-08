import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { filmDecrease, filmIncrease, filmDelete } from "../../reducer/action";
import { useMediaQuery } from "react-responsive";
import StoreHOC from "../../context/storeHOC";
import "./storeTable.scss";

const StoreTable = ({
  cartItems,
  orderTotal,
  isLogin,
  filmDecrease,
  filmIncrease,
  filmDelete,
}) => {
  const isTable = useMediaQuery({ query: "(min-width: 531px)" });

  console.log("is", isLogin);

  const alertReg = () => {
    alert("please login");
  };

  return (
    <div className="store__home_scroll">
      <h3 className="store__home_title">Your Order</h3>
      <ul className="store__home_table">
        {isTable ? (
          <li className="store__home_li">
            <span>#</span>
            <span>Item</span>
            <span>Count</span>
            <span>Price</span>
            <span>Action</span>
          </li>
        ) : (
          <div className="store__home_li_adap">Films</div>
        )}

        {cartItems.map((item, index) => {
          if (isTable) {
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
          } else {
            return (
              <li key={item.id}>
                <div>
                  <p>№{index + 1}</p>
                  <p>/ {item.name} /</p>
                  <p>count {item.count} /</p>
                  <p>${item.price * item.count}</p>
                </div>
                <div className="store__home_wrap-btn">
                  <button onClick={() => filmDecrease(item)}>
                    <i className="fas fa-minus fa-lg"></i>
                  </button>
                  <button onClick={() => filmIncrease(item)}>
                    <i className="fas fa-plus fa-lg"></i>
                  </button>
                  <button onClick={() => filmDelete(item)}>
                    <i className="far fa-window-close fa-lg"></i>
                  </button>
                </div>
              </li>
            );
          }
        })}

        <div className="store__home_total">
          <h5>${orderTotal}</h5>
          {isLogin ? (
            <Link to="/store/cart">
              <button className="store__home_buttton_active">Checkout</button>
            </Link>
          ) : (
            <button onClick={alertReg}>Checkout</button>
          )}
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = ({
  filmCart: { cartItems, orderTotal },
  authentication: { isLogin },
}) => {
  return { cartItems, orderTotal, isLogin };
};

const mapDispatchToProps = {
  filmDecrease,
  filmIncrease,
  filmDelete,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreTable)
);
