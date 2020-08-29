import React, { useState } from "react";
import CinemaHeader from "./cinemaHeader/cinemaHeader";
import CinemaMain from "./cinemaMain/cinemaMain";
import "./cinema.scss";

const Cinema = () => {
  const [cinemaFest, setCinemaFest] = useState("Cannes");

  const cinemaFestActive = (item) => {
    setCinemaFest(item);
    return item;
  };

  // console.log(cinemaFest);

  return (
    <div className="cinema">
      <CinemaHeader
        cinemaFestActive={cinemaFestActive}
        cinemaFest={cinemaFest}
      />
      <CinemaMain cinemaFest={cinemaFest} />
      <footer className="cinema__footer"></footer>
    </div>
  );
};

export default Cinema;
