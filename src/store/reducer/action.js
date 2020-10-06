const filmLoaded = (newFilm, str) => {
  return {
    type: "FILMS_LOADED",
    payload: newFilm,
    str: str,
  };
};

const filmDecst = (foo) => {
  return {
    type: "FILM_DECST",
    payload: foo,
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

const login = (log) => {
  return {
    type: "LOGIN",
    payload: log,
  };
};

const submit = (sub) => {
  return {
    type: "SUBMIT",
    payload: sub,
  };
};

const loginUser = (name) => {
  return {
    type: "USERNAME",
    payload: name,
  };
};

const loginError = (err) => {
  return {
    type: "ERROR",
    payload: err,
  };
};

export {
  filmLoaded,
  filmRequested,
  filmError,
  filmDecrease,
  filmAdd,
  filmDecst,
  filmIncrease,
  filmDelete,
  filmNext,
  filmPrev,
  login,
  submit,
  loginUser,
  loginError,
};
