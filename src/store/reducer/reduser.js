import updateFilmCart from "./filmCart";
import updateFilmList from "./filmList";
import upadateAuthentication from "./authentication";

const reducer = (state, action) => {
  console.log(action.type);
  return {
    filmList: updateFilmList(state, action),
    filmCart: updateFilmCart(state, action),
    authentication: upadateAuthentication(state, action),
  };
};

export default reducer;
