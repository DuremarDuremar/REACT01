const updateCartItems = (cartItems, item, index) => {
  if (index < 0) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateFilmCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "FILM_ADD":
      const filmId = action.payload;
      const film = state.filmList.films.find((film) => film.id === filmId);
      const itemIndex = state.filmCart.cartItems.findIndex(
        ({ id }) => id === filmId
      );
      const item = state.filmCart.cartItems[itemIndex];
      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          price: item.price,
        };
      } else {
        newItem = {
          id: film.id,
          name: film.title,
          count: 1,
          price: film.price,
          image: film.image,
        };
      }

      return {
        cartItems: updateCartItems(
          state.filmCart.cartItems,
          newItem,
          itemIndex
        ),
        orderTotal: state.filmCart.orderTotal + film.price,
      };

    case "FILM_DECREASE":
      const inx = state.filmCart.cartItems.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (action.payload.count === 1) {
        return {
          cartItems: [
            ...state.filmCart.cartItems.slice(0, inx),
            ...state.filmCart.cartItems.slice(inx + 1),
          ],
          orderTotal:
            state.filmCart.orderTotal >= 0
              ? state.filmCart.orderTotal - action.payload.price
              : state.filmCart.orderTotal,
        };
      }

      return {
        cartItems: state.filmCart.cartItems.map((item) => {
          if (item === action.payload && item.count > 0) {
            item.count = item.count - 1;
          }
          return item;
        }),
        orderTotal:
          state.filmCart.orderTotal > 0 && action.payload.count !== -1
            ? state.filmCart.orderTotal - action.payload.price
            : state.filmCart.orderTotal,
      };
    case "FILM_INCREASE":
      return {
        cartItems: state.filmCart.cartItems.map((item) => {
          if (item === action.payload && item.count < 100) {
            item.count = item.count + 1;
          }
          return item;
        }),
        orderTotal:
          state.filmCart.orderTotal < 5000 && action.payload.count !== 100
            ? state.filmCart.orderTotal + action.payload.price
            : state.filmCart.orderTotal,
      };

    case "FILM_DELETE":
      return {
        cartItems: state.filmCart.cartItems.filter(
          (item) => item !== action.payload
        ),
        orderTotal:
          state.filmCart.orderTotal -
          action.payload.price * action.payload.count,
      };
    default:
      return state.filmCart;
  }
};

export default updateFilmCart;
