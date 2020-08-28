import React, { useState } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";
import CinemaListItem from "./cinemaListItem";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState(dataCinema[0]);

  const cinemaList = dataCinema.map(function (item) {
    const { filmId } = item;
    return (
      <li key={filmId}>
        <CinemaListItem item={item} setCinemaItem={setCinemaItem} />
      </li>
    );
  });

  // const cinemaActive = (event) => {
  //   console.log(event);
  //   event.classList.add("cinema__li_active");
  // };

  // "cinema__btn_active"
  // console.log(dataCinema);

  return (
    <div className="cinema__content">
      <ul className="cinema__list">{cinemaList}</ul>
      <CinemaItem item={cinemaItem} />
    </div>
  );
};
export default CinemaPage;
