const initialState = {
  films: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: "Бойцовая рыбка",
      count: 2,
      price: 10,
    },
    {
      id: 2,
      name: "Седьмая печать",
      count: 1,
      price: 12,
    },
  ],
  orderTotal: 32,
};

const reducer = (state = initialState, action) => {
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
    case "FILM_DECREASE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
