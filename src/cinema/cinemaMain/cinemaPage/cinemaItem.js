import React from "react";
import CinemaSpinner from "../../cinemaServer/cinemaSpinner";

const CinemaItem = ({ item, feed, prevFeed, posterWidth, setPosterWidth }) => {
  const { url, nameEn } = item;

  const cinemaPosterWidth = (e) => {
    setPosterWidth(!posterWidth);

    if (posterWidth === false) {
      e.classList.add("cinema__poster_width");
      e.classList.remove("cinema__poster");
    }
    if (posterWidth === true) {
      e.classList.remove("cinema__poster_width");
      e.classList.add("cinema__poster");
    }
  };

  const cinemaFramesWidth = (e) => {
    setPosterWidth(!posterWidth);

    if (posterWidth === false) {
      e.classList.add("cinema__frames_width");
      e.classList.remove("cinema__frames");
    }
    if (posterWidth === true) {
      e.classList.remove("cinema__frames_width");
      e.classList.add("cinema__frames");
    }
  };

  const feedAll = feed[0].split(",");
  const feedCountry = feedAll[0];
  const feedAll2 = feedAll[1].split("(");
  const feedName = feedAll2[0];

  const cinemaItem = () => {
    const frame1 = feed[1][0];
    const frame2 = feed[1][1];
    const frame3 = feed[1][2];

    return (
      <>
        <div
          className="cinema__frames"
          onClick={(event) => cinemaFramesWidth(event.currentTarget)}
        >
          <img src={frame1} alt={nameEn}></img>
          <img src={frame2} alt={nameEn}></img>
          <img src={frame3} alt={nameEn}></img>
        </div>
        <div className="cinema__right">
          <div className="cinema__poster">
            <img
              onClick={(event) =>
                cinemaPosterWidth(event.currentTarget.parentNode)
              }
              src={url}
              alt={nameEn}
            ></img>
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
      <div className="cinema__item-wrap">{cinemaItemContent}</div>
    </div>
  );
};

export default CinemaItem;
