import React, { useState, useEffect } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";
import CinemaListItem from "./cinemaListItem";
import CinemaSpinner from "../../cinemaServer/cinemaSpinner";
import { cinemaDirector } from "../../cinemaServer/cinemaServer";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState(dataCinema[0]);
  const [cinemaLiActive, setCinemaLiActive] = useState(dataCinema[0].filmId);
  const [prevCinemaFeed, setPrevCinemaFeed] = useState(null);
  const [cinemaFeed, setCinemaFeed] = useState(null);
  const [cinemaWindow, setCinemaWindow] = useState(document.body.clientWidth);

  const cinemaActive = (event) => {
    cinemaDirector(event.title).then(
      (response) => setCinemaFeed(response),
      setPrevCinemaFeed(cinemaFeed)
    );
    setCinemaLiActive(event.id);
  };

  useEffect(() => {
    setCinemaItem(dataCinema[0]);
    setCinemaLiActive(dataCinema[0].filmId);
    cinemaDirector(dataCinema[0].nameEn).then((response) =>
      setCinemaFeed(response)
    );
  }, [dataCinema]);

  // console.log(cinemaWindow);

  const cinemaItemContentDecstop = () => {
    return (
      <CinemaItem
        item={cinemaItem}
        feed={cinemaFeed}
        prevFeed={prevCinemaFeed}
      />
    );
  };

  const cinemaItemContentAdap = () => {
    return (
      <CinemaItem
        item={cinemaItem}
        feed={cinemaFeed}
        prevFeed={prevCinemaFeed}
      />
    );
  };

  const cinemaItemContent =
    cinemaWindow < 865 ? null : cinemaItemContentDecstop();

  const cinemaList = dataCinema.map(function (item) {
    const { filmId } = item;

    let classActive =
      item.filmId === Number(cinemaLiActive) ? "cinema__li_active" : null;

    return (
      <li key={filmId}>
        <CinemaListItem
          cinemaItemContentAdap={cinemaItemContentAdap}
          classActive={classActive}
          item={item}
          setCinemaItem={setCinemaItem}
          cinemaActive={cinemaActive}
          cinemaWindow={cinemaWindow}
          numId={cinemaItem.filmId}
        />
      </li>
    );
  });

  window.addEventListener("resize", function () {
    setCinemaWindow(document.body.clientWidth);
  });

  // console.log(cinemaWindow);

  if (!cinemaFeed) return <CinemaSpinner />;

  return (
    <div className="cinema__content">
      <ul className="cinema__list">{cinemaList}</ul>
      {cinemaItemContent}
    </div>
  );
};
export default CinemaPage;
