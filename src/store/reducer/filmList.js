const updateFilmList = (state, action) => {
  console.log(action.type);
  if (state === undefined) {
    return {
      films: [],
      loading: true,
      error: null,
      page: 1,
    };
  }

  switch (action.type) {
    case "FILMS_REQUESTED":
      return {
        ...state.filmList,
        films: [],
        loading: true,
        error: null,
      };
    case "FILMS_LOADED":
      // const allLength = action.payload.length;
      // const allPage = Math.ceil(allLength / 2);

      let filmViev = [];
      let str = state.filmList.page;

      if (str === 1) {
        filmViev = action.payload.slice(0, 2);
      } else {
        filmViev = action.payload.slice(str, str + 2);
      }

      return {
        ...state.filmList,
        films: filmViev,
        loading: false,
        error: null,
      };

    case "FILM_NEXT":
      return {
        ...state.filmList,
        page: state.filmList.page + 1,
      };

    case "FILM_PREV":
      return {
        ...state.filmList,
        page: state.filmList.page - 1,
      };

    case "FILMS_ERROR":
      return {
        ...state.filmList,
        films: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.filmList;
  }
};

export default updateFilmList;
