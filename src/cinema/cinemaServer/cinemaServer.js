const getSend = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": "9fbbb1e4-8c01-4ed2-ac4c-9d8a1ac83e48",
    },
  });
  if (!res.ok) {
    throw new Error(`could not fetch ${res}`);
  }
  const resJson = await res.json();
  const films = resJson.films;
  const transformCinema = (film) => {
    return {
      filmId: film.filmId,
      name: film.nameRu,
      nameEn: film.nameEn,
      year: film.year,
    };
  };
  const newFilms = films.map(function (film) {
    return transformCinema(film);
  });

  return newFilms;
};

export default getSend;

export const cinemaUrl =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/top?listId=";
