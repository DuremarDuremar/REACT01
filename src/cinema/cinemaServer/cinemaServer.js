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
  const page = await getSend("20&page=1");
  const page2 = await getSend("20&page=2");
  const result = [...page, ...page2];
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export const cinemaBerlin = async () => {
  const page = await getSend("19&page=1");
  const page2 = await getSend("19&page=2");
  const result = [...page, ...page2];
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export const cinemaVenice = async () => {
  const page = await getSend("22&page=1");
  const page2 = await getSend("22&page=2");
  const result = [...page, ...page2];
  return result.map(function (film) {
    return transformCinema(film);
  });
};

export const cinemaSundance = async () => {
  const result = await getSend("21&page=1");
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

// const films = resJson.films;

// return films;
// };

// console.log(
//   getSend2(
//     "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=Kis-Uykusu&page=1"
//   )
// );

// berlin 19
// venecia 22
// sansens 21

const getDirector = async (url) => {
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

  return films;
};

export const getFrames = async (url) => {
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
  const framesAll = resJson.frames;
  if (!framesAll[0]) {
    framesAll[0] +=
      "https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png";
  }
  if (!framesAll[1]) {
    framesAll[1] +=
      "https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png";
  }
  if (!framesAll[2]) {
    framesAll[2] +=
      "https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png";
  }
  const frames = [framesAll[0].image, framesAll[1].image, framesAll[2].image];
  console.log(frames);
  return frames;
};

export const cinemaDirector = async (cinemaFeed) => {
  const feed = await getDirector(
    ` https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${cinemaFeed}&page=1`
  );
  const idFrames = feed[0].filmId;
  const framesAwait = await getFrames(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${idFrames}/frames`
  );
  const frames = framesAwait.map(function (id) {
    return `https://kinopoiskapiunofficial.tech/images/frames/kp/${id}`;
  });
  console.log(frames);
  const result = [feed[0].description, frames];
  // console.log(result);
  return result;
};
