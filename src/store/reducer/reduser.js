const initialState = {
  films: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILMS_REQUESTED":
      return {
        films: [],
        loading: true,
        error: null,
      };
    case "FILMS_LOADED":
      return {
        films: action.payload,
        loading: false,
        error: null,
      };
    case "FILMS_ERROR":
      return {
        films: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
