const initialState = {
  films: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILMS_LOADED":
      return {
        films: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
