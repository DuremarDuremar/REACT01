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

const filmAdd = (id) => {
  return {
    type: "FILM_ADD",
    payload: id,
  };
};

const filmDecrease = (item) => {
  return {
    type: "FILM_DECREASE",
    payload: item,
  };
};

export { filmLoaded, filmRequested, filmError, filmDecrease, filmAdd };
