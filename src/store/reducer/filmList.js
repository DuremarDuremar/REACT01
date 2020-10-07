import React from "react";
import { useMediaQuery } from "react-responsive";

const updateFilmList = (state, action) => {
  // console.log(action.type);
  if (state === undefined) {
    return {
      films: [],
      loading: true,
      error: null,
      page: 1,
      allPage: 1,
      decst: null,
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
    case "FILM_DECST":
      // console.log("decst", action.payload);
      // console.log("allPage decst", state.filmList.allPage);

      return {
        ...state.filmList,
        decst: action.payload,
      };
    case "FILMS_LOADED":
      const allLength = action.payload.length;
      // console.log("allFilms", action.payload);
      let str = state.filmList.page;

      let Slice = state.filmList.decst ? str * 2 : str;

      let filmViev = state.filmList.decst
        ? action.payload.slice(Slice - 2, Slice)
        : action.payload.slice(Slice - 1, Slice);

      // console.log("filmViev", filmViev);
      // console.log("allPage", state.filmList.allPage);
      // console.log("Page", state.filmList.page);
      // console.log("dd", state.filmList.decst);

      return {
        ...state.filmList,
        allPage: state.filmList.decst ? Math.ceil(allLength / 2) : allLength,
        films: filmViev,
        loading: false,
        error: null,
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
