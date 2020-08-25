import React from "react";
import CinemaHeader from "./cinemaHeader/cinemaHeader";
import CinemaMain from "./cinemaMain/cinemaMain";
import "./cinema.scss";

const Cinema = () => {
  return (
    <div className="cinema">
      <CinemaHeader />
      <CinemaMain />
      <footer className="cinema__footer"></footer>
    </div>
  );
};

export default Cinema;
