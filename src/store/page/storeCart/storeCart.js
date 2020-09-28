import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { filmDelete } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import "./storeCart.scss";

const StoreCart = ({ cartItems, orderTotal, filmDelete }) => {
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0);

  // let Allpage = Math.ceil(cartItems.length / 2 + 1);

  // console.log(Allpage);
  console.log("number", number);

  const cartActive = useCallback(
    (arr) => {
      if (arr.length < 6) {
        setNumber(0);
      }

      const newArr = arr.filter((item, index) => {
        console.log("arr", arr.length);
        if (number === arr.length - 4) {
          setNumber(0);
        }

        if (number < 0) {
          setNumber(Math.round(arr.length / 5));
        }

        return index >= number && index < number + 5;
      });

      return newArr;
    },
    [number]
  );

  // console.log(cartItems.length);
  // console.log(number);

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
        {cartItems.length > 5 && (
          <i
            className="fas fa-chevron-circle-left"
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
        {cartItems.length > 5 && (
          <i
            className="fas fa-chevron-circle-right"
            onClick={() => setNumber(number + 1)}
          ></i>
        )}
      </div>
      <div className="store__cart_total">
        <button>
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
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreCart)
);
