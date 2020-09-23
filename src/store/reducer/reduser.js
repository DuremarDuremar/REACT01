const initialState = {
  films: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const updateCartItems = (cartItems, item, index) => {
  if (index < 0) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);

  switch (action.type) {
    case "FILMS_REQUESTED":
      return {
        ...state,
        films: [],
        loading: true,
        error: null,
      };
    case "FILMS_LOADED":
      return {
        ...state,
        films: action.payload,
        loading: false,
        error: null,
      };
    case "FILMS_ERROR":
      return {
        ...state,
        films: [],
        loading: false,
        error: action.payload,
      };
    case "FILM_ADD":
      const filmId = action.payload;
      const film = state.films.find((film) => film.id === filmId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === filmId);
      const item = state.cartItems[itemIndex];
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
        };
      }

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        orderTotal: state.orderTotal + film.price,
      };

    case "FILM_DECREASE":
      console.log(action.payload);
      const ff = state.orderTotal - action.payload.price;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item === action.payload && item.count > 0) {
            item.count = item.count - 1;
          }
          return item;
        }),
        orderTotal:
          state.orderTotal > 0 && action.payload.count !== 0
            ? state.orderTotal - action.payload.price
            : state.orderTotal,
      };

    case "FILM_DELETE":
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
