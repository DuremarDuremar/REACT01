const initialState = {
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILMS_LOADED":
      return {
        films: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
