import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { filmDelete, login } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { Link } from "react-router-dom";
import "./storeCart.scss";

const StoreCart = ({ cartItems, orderTotal, filmDelete, login }) => {
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0);

  const is1200 = useMediaQuery({ query: "(min-width: 1200px)" });
  const is760 = useMediaQuery({ query: "(min-width: 760px)" });

  console.log("number", number);

  let cartNumber = is1200 ? 5 : is760 ? 3 : 1;
  console.log(cartNumber);
  const cartActive = useCallback(
    (arr) => {
      if (arr.length < 6) {
        setNumber(0);
      }

      const newArr = arr.filter((item, index) => {
        console.log("arr", arr.length);
        if (number >= arr.length - (cartNumber - 1)) {
          setNumber(0);
          // return index <= number - 4 || index >= number;
        }

        if (number < 0) {
          setNumber(Math.round(arr.length - cartNumber));
        }

        return index >= number && index < number + cartNumber;
      });

      return newArr;
    },
    [number, cartNumber]
  );

  // console.log(cartItems.length);

  useEffect(() => {
    setCart(cartActive(cartItems));
  }, [setCart, cartActive, cartItems]);

  const cartDelete = (item) => {
    filmDelete(item);

    const cart2 = cartItems.filter((elem) => {
      return elem.id !== item.id;
    });

    setCart(cartActive(cart2));
  };

  return (
    <div className="store__cart">
      <div className="store__cart_slider">
        {cartItems.length > cartNumber && (
          <i
            className="fas fa-chevron-circle-left fa-2x"
            onClick={() => setNumber(number - 1)}
          ></i>
        )}
        {cart.map((item, index) => {
          return (
            <div className="store__cart_item" key={item.id}>
              <h4>{item.name}</h4>
              <div className="store__cart_img">
                <span className="store__cart_price">
                  ${item.price * item.count}
                </span>
                <img src={item.image} alt={item.name} />
                <span className="store__cart_count">{item.count} шт</span>
                <span
                  className="store__cart_delete"
                  onClick={() => cartDelete(item)}
                >
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            </div>
          );
        })}
        {cartItems.length > cartNumber && (
          <i
            className="fas fa-chevron-circle-right fa-2x"
            onClick={() => setNumber(number + 1)}
          ></i>
        )}
      </div>
      <div className="store__cart_button">
        <Link to="/store">
          <button className="store__cart_exit" onClick={() => login(false)}>
            exit
          </button>
        </Link>
        <button className="store__cart_total">
          buy <br />${orderTotal}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ filmCart: { cartItems, orderTotal } }) => {
  return { cartItems, orderTotal };
};

const mapDispatchToProps = {
  filmDelete,
  login,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreCart)
);
