const updateFilmList = (state, action) => {
  // console.log(action.type);
  if (state === undefined) {
    return {
      films: [],
      loading: true,
      error: null,
      page: 1,
      allPage: 1,
    };
  }

  // console.log(state.filmList.films);
  // console.log(state.filmList.page);

  switch (action.type) {
    case "FILMS_REQUESTED":
      return {
        ...state.filmList,
        films: [],
        loading: true,
        error: null,
      };
    case "FILMS_LOADED":
      const allLength = action.payload.length;
      // console.log(action.payload);
      let str = state.filmList.page;

      let Slice = str * 2;

      let filmViev = action.payload.slice(Slice - 2, Slice);

      return {
        ...state.filmList,
        films: filmViev,
        loading: false,
        error: null,
        allPage: Math.ceil(allLength / 2),
      };

    case "FILM_NEXT":
      return {
        ...state.filmList,
        page:
          state.filmList.allPage > state.filmList.page
            ? state.filmList.page + 1
            : 1,
      };

    case "FILM_PREV":
      return {
        ...state.filmList,
        page:
          state.filmList.page !== 1
            ? state.filmList.page - 1
            : state.filmList.allPage,
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
