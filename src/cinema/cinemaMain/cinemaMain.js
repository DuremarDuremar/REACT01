import React, { useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import CinemaSpinner from "../cinemaServer/cinemaSpinner";

import cannes from "../cinemaImages/cannes.png";
import berlin from "../cinemaImages/berlin.png";
import venice from "../cinemaImages/venice.png";
import sundance from "../cinemaImages/sundance.png";
import "./cinemaMain.scss";

const CinemaMain = ({ stateCinema, cinemaFest, cinemaInfo }) => {
  // console.log(stateCinema);

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

  if (!stateCinema) return <CinemaSpinner />;
  return (
    <div className="cinema__main">
      <div className="cinema__container">
        <div className="cinema__festival">
          <p>{cinemaInfo.festStars}</p>
          <img src={images()} alt="cannes"></img>
          <h1>{cinemaInfo.festName}</h1>
        </div>
        <CinemaPage dataCinema={stateCinema} />
      </div>
    </div>
  );
};

export default CinemaMain;
