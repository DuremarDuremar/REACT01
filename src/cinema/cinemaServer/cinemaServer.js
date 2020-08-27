const cinemaUrl =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/top?listId=";

const getSend = async (url) => {
  const res = await fetch(`${cinemaUrl}${url}`, {
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

  const newFilms = films.map(function (film) {
    return transformCinema(film);
  });
  // console.log(newFilms);
  return films;
};

const transformCinema = (film) => {
  return {
    filmId: film.filmId,
    name: film.nameRu,
    nameEn: film.nameEn,
    year: film.year,
  };
};

export const cinemaCann = async () => {
  const result = await getSend("20&page=1");
  // console.log(result);
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export default getSend;

// const tre = [];

// fetch(`${cinemaUrl}20&page=1`, {
//   method: "GET",
//   headers: {
//     "X-API-KEY": "9fbbb1e4-8c01-4ed2-ac4c-9d8a1ac83e48",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => tre.push(json.films[2]));

// console.log(tre);
