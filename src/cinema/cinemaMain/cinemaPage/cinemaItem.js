import React from "react";
import CinemaSpinner from "../../cinemaServer/cinemaSpinner";

const CinemaItem = ({ item, feed, prevFeed }) => {
  const { url, nameEn } = item;

  const feedAll = feed[0].split(",");
  const feedCountry = feedAll[0];
  const feedAll2 = feedAll[1].split("(");
  const feedName = feedAll2[0];

  const cinemaDeleteClass = (item) => {
    item.classList.add("cinema__exit_active");
    item.classList.remove("cinema__item-wrap");
  };

  const cinemaItem = () => {
    const frame1 = feed[1][0];
    const frame2 = feed[1][1];
    const frame3 = feed[1][2];

    return (
      <>
        <div className="cinema__frames">
          <img src={frame1} alt={nameEn}></img>
          <img src={frame2} alt={nameEn}></img>
          <img src={frame3} alt={nameEn}></img>
        </div>
        <div className="cinema__right">
          <div className="cinema__poster">
            <img src={url} alt={nameEn}></img>
          </div>

          <div className="cinema__feed">
            <h1>{feedName}</h1>
            <h2>{feedCountry}</h2>
          </div>
        </div>
      </>
    );
  };

  const cinemaItemContent =
    feed === prevFeed ? <CinemaSpinner /> : cinemaItem();

  return (
    <div className="cinema__item">
      <div className="cinema__item-wrap">
        <div
          className="cinema__exit"
          onClick={(event) => cinemaDeleteClass(event.currentTarget.parentNode)}
        >
          <i className="fas fa-times-circle fa-2x"></i>
        </div>
        {cinemaItemContent}
      </div>
    </div>
  );
};

export default CinemaItem;
