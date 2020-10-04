const filmLoaded = (newFilm, str) => {
  return {
    type: "FILMS_LOADED",
    payload: newFilm,
    str: str,
  };
};

const filmNext = () => {
  return {
    type: "FILM_NEXT",
  };
};

const filmPrev = () => {
  return {
    type: "FILM_PREV",
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

const filmIncrease = (item) => {
  return {
    type: "FILM_INCREASE",
    payload: item,
  };
};

const filmDelete = (item) => {
  return {
    type: "FILM_DELETE",
    payload: item,
  };
};

const login = () => {
  return {
    type: "LOGIN",
  };
};

const submit = (sub) => {
  return {
    type: "SUBMIT",
    payload: sub,
  };
};

export {
  filmLoaded,
  filmRequested,
  filmError,
  filmDecrease,
  filmAdd,
  filmIncrease,
  filmDelete,
  filmNext,
  filmPrev,
  login,
  submit,
};
