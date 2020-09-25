const updateFilmList = (state, action) => {
  if (state === undefined) {
    return {
      films: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FILMS_REQUESTED":
      return {
        films: [],
        loading: true,
        error: null,
      };
    case "FILMS_LOADED":
      // const allLength = action.payload.length;
      // const allPage = Math.ceil(allLength / 2);

      let filmViev = [];
      if (action.str === 1) {
        filmViev = action.payload.slice(0, 2);
      } else {
        filmViev = action.payload.slice(action.str, action.str + 2);
      }

      return {
        films: filmViev,
        loading: false,
        error: null,
        str: action.str,
      };
    case "FILMS_ERROR":
      return {
        films: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.filmList;
  }
};

export default updateFilmList;
