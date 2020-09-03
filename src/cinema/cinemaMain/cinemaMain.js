import React from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import CinemaSpinner from "../cinemaServer/cinemaSpinner";

import cannes from "../cinemaImages/cannes.png";
import berlin from "../cinemaImages/berlin.png";
import venice from "../cinemaImages/venice.png";
import sundance from "../cinemaImages/sundance.png";
import "./cinemaMain.scss";

const CinemaMain = ({ stateCinema, cinemaFest, setCinemaFest, cinemaInfo }) => {
  const images = () => {
    switch (cinemaFest) {
      case "Berlin":
        return berlin;

      case "Cannes":
        return cannes;

      case "Venice":
        return venice;

      case "Sundance":
        return sundance;

      default:
        return cannes;
    }
  };

  const cinemaFestActiveAdap = (n) => {
    const festArray = ["Berlin", "Cannes", "Venice", "Sundance"];
    festArray.forEach(function (item, index) {
      if (item === cinemaFest) {
        console.log(n);
        // let inc =
        //   index + 1 === festArray.length ? festArray[0] : festArray[index + 1];
        // let dec = index === 0 ? festArray[3] : festArray[index - 1];
        setCinemaFest(
          n === "inc"
            ? index + 1 === festArray.length
              ? festArray[0]
              : festArray[index + 1]
            : index === 0
            ? festArray[3]
            : festArray[index - 1]
        );
      }
    });
  };

  if (!stateCinema) return <CinemaSpinner />;
  return (
    <div className="cinema__main">
      <div className="cinema__container">
        <div className="cinema__festival">
          <p>{cinemaInfo.festStars}</p>
          <span
            className="cinema__arrow cinema__arrow_left"
            onClick={() => cinemaFestActiveAdap("dec")}
          >
            <i className="fas fa-angle-double-left"></i>
          </span>
          <img src={images()} alt="cannes"></img>
          <span
            className="cinema__arrow cinema__arrow_right"
            onClick={() => cinemaFestActiveAdap("inc")}
          >
            <i className="fas fa-angle-double-right"></i>
          </span>
          <h1>{cinemaInfo.festName}</h1>
        </div>
        <CinemaPage dataCinema={stateCinema} />
      </div>
    </div>
  );
};

export default CinemaMain;
