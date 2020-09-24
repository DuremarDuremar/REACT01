import updateFilmCart from "./filmCart";
import updateFilmList from "./filmList";

const reducer = (state, action) => {
  return {
    filmList: updateFilmList(state, action),
    filmCart: updateFilmCart(state, action),
  };
};

export default reducer;
