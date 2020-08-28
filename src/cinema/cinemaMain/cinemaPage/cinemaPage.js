import React, { useState } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";
import CinemaListItem from "./cinemaListItem";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState(dataCinema[0]);
  const [cinemaLiActive, setCinemaLiActive] = useState(null);

  const cinemaActive = (event) => {
    setCinemaLiActive(event.id);
  };

  const cinemaList = dataCinema.map(function (item) {
    const { filmId } = item;
    let cla = null;
    if (item.filmId == cinemaLiActive) {
      cla = "cinema__li_active";
    }
    return (
      <li key={filmId}>
        <CinemaListItem
          classActive={cla}
          item={item}
          setCinemaItem={setCinemaItem}
          cinemaActive={cinemaActive}
        />
      </li>
    );
  });

  return (
    <div className="cinema__content">
      <ul className="cinema__list">{cinemaList}</ul>
      <CinemaItem item={cinemaItem} />
    </div>
  );
};
export default CinemaPage;
