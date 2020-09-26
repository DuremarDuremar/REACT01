import updateFilmCart from "./filmCart";
import updateFilmList from "./filmList";

const reducer = (state, action) => {
  console.log(action.type);
  return {
    filmList: updateFilmList(state, action),
    filmCart: updateFilmCart(state, action),
  };
};

export default reducer;
