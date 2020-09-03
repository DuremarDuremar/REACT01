import React, { useState, useEffect } from "react";
import "./cinemaPage.scss";
import CinemaItem from "./cinemaItem";
import CinemaListItem from "./cinemaListItem";
import CinemaSpinner from "../../cinemaServer/cinemaSpinner";
import ErrorBoundry from "../../../error/error-boundry";
import { cinemaDirector } from "../../cinemaServer/cinemaServer";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState(dataCinema[0]);
  const [cinemaLiActive, setCinemaLiActive] = useState(dataCinema[0].filmId);
  const [prevCinemaFeed, setPrevCinemaFeed] = useState(null);
  const [cinemaFeed, setCinemaFeed] = useState(null);
  const [cinemaWindow, setCinemaWindow] = useState(document.body.clientWidth);
  const [posterWidth, setPosterWidth] = useState(false);

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

  const cinemaItemContent = () => {
    return (
      <CinemaItem
        item={cinemaItem}
        feed={cinemaFeed}
        prevFeed={prevCinemaFeed}
        posterWidth={posterWidth}
        setPosterWidth={setPosterWidth}
      />
    );
  };

  const cinemaItemRes = cinemaWindow < 865 ? null : cinemaItemContent();

  const cinemaList = dataCinema.map(function (item) {
    const { filmId } = item;

    let classActive =
      item.filmId === Number(cinemaLiActive) ? "cinema__li_active" : null;

    return (
      <li key={filmId}>
        <CinemaListItem
          cinemaItemContentAdap={cinemaItemContent}
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

  if (!cinemaFeed) return <CinemaSpinner />;

  return (
    <ErrorBoundry>
      <div className="cinema__content">
        <ul className="cinema__list">{cinemaList}</ul>
        {cinemaItemRes}
      </div>
    </ErrorBoundry>
  );
};
export default CinemaPage;
