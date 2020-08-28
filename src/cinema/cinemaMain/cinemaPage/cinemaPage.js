import React, { useState } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState({
    filmId: 1043758,
    name: "Паразиты",
    nameEn: "Gisaengchung",
    url:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1043758.jpg",
    year: "2019",
  });

  const cinemaList = dataCinema.map(function (item) {
    const { url, filmId, name, nameEn, year } = item;
    return (
      <li className="cinema__page" key={filmId}>
        <span onClick={() => setCinemaItem(item)}>
          <h3>{name}</h3>
          <p>{year}</p>
        </span>
      </li>
    );
  });

  const cinemaDetal = (item) => {
    return item;
  };

  console.log(cinemaItem);

  return (
    <div>
      <ul>{cinemaList}</ul>
      <CinemaItem item={cinemaItem} />
    </div>
  );
};
export default CinemaPage;
