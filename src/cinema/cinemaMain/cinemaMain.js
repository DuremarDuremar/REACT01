import React, { useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import CinemaSpinner from "../cinemaServer/cinemaSpinner";

import cannes from "../cinemaImages/cannes.png";
import "./cinemaMain.scss";

const CinemaMain = ({ stateCinema, cinemaFest, cinemaInfo }) => {
  // useEffect(() => {}, [cinemaFest]);

  console.log(cinemaInfo);

  if (!stateCinema) return <CinemaSpinner />;
  return (
    <div className="cinema__main">
      <div className="cinema__container">
        <div className="cinema__festival">
          <p>{cinemaInfo.festStars}</p>
          <img src={cannes} alt="cannes"></img>
          <h1>{cinemaInfo.festName}</h1>
        </div>
        <CinemaPage dataCinema={stateCinema} />
      </div>
    </div>
  );
};

export default CinemaMain;
