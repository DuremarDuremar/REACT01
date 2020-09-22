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

export { filmLoaded, filmRequested, filmError };
