import React, { useState, useEffect } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";
import CinemaListItem from "./cinemaListItem";
import CinemaSpinner from "../../cinemaServer/cinemaSpinner";
import { cinemaDirector } from "../../cinemaServer/cinemaServer";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState(dataCinema[0]);
  const [cinemaLiActive, setCinemaLiActive] = useState(dataCinema[0].filmId);
  const [cinemaFeed, setCinemaFeed] = useState(null);

  const cinemaActive = (event) => {
    cinemaDirector(event.title).then((response) => setCinemaFeed(response));
    setCinemaLiActive(event.id);
  };

  useEffect(() => {
    setCinemaItem(dataCinema[0]);
    setCinemaLiActive(dataCinema[0].filmId);
    cinemaDirector(dataCinema[0].nameEn).then((response) =>
      setCinemaFeed(response)
    );
  }, [dataCinema]);

  const cinemaList = dataCinema.map(function (item) {
    const { filmId } = item;

    let classActive =
      item.filmId === Number(cinemaLiActive) ? "cinema__li_active" : null;

    return (
      <li key={filmId}>
        <CinemaListItem
          classActive={classActive}
          item={item}
          setCinemaItem={setCinemaItem}
          cinemaActive={cinemaActive}
        />
      </li>
    );
  });

  if (!cinemaFeed) return <CinemaSpinner />;

  return (
    <div className="cinema__content">
      <ul className="cinema__list">{cinemaList}</ul>
      <CinemaItem item={cinemaItem} feed={cinemaFeed} />
    </div>
  );
};
export default CinemaPage;
