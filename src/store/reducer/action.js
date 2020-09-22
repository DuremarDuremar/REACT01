const filmLoaded = (newFilm) => {
  return {
    type: "FILMS_LOADED",
    payload: newFilm,
  };
};

const filmRequested = () => {
  return {
    type: "FILMS_REQUESTED",
  };
};

const filmError = (error) => {
  return {
    type: "FILMS_ERROR",
    payload: error,
  };
};

const filmDecrease = (n) => {
  return {
    type: "FILM_DECREASE",
    payload: console.log(n),
  };
};

export { filmLoaded, filmRequested, filmError, filmDecrease };
