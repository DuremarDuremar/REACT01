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

  return films;
};

const transformCinema = (film) => {
  return {
    filmId: film.filmId,
    name: film.nameRu,
    nameEn: film.nameEn,
    year: film.year,
    url: film.posterUrlPreview,
  };
};

export const cinemaCannes = async () => {
  const result = await getSend("20&page=1");
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export const cinemaBerlin = async () => {
  const result = await getSend("19&page=1");
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export default getSend;

// const getSend2 = async (url) => {
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "X-API-KEY": "9fbbb1e4-8c01-4ed2-ac4c-9d8a1ac83e48",
//     },
//   });
//   if (!res.ok) {
//     throw new Error(`could not fetch ${res}`);
//   }
//   return await res.json();

//   // const films = resJson.films;

//   // return films;
// };

// console.log(
//   getSend2("https://kinopoiskapiunofficial.tech/api/v2.1/films/top?listId=19")
// );

// berlin 19
// venecia 22
// sansens 21
