import React, { useState, useEffect } from "react";
import CinemaHeader from "./cinemaHeader/cinemaHeader";
import CinemaMain from "./cinemaMain/cinemaMain";
import {
  cinemaCannes,
  cinemaBerlin,
  cinemaVenice,
  cinemaSundance,
} from "./cinemaServer/cinemaServer";
import "./cinema.scss";

const Cinema = () => {
  const [cinemaFest, setCinemaFest] = useState("Cannes");
  const [stateCinema, setStateCinema] = useState(null);

  const cinemaFestActive = (item) => {
    setCinemaFest(item);
  };

  useEffect(() => {
    switch (cinemaFest) {
      case "Berlin":
        cinemaBerlin().then((response) => setStateCinema(response));
        break;
      case "Cannes":
        cinemaCannes().then((response) => setStateCinema(response));
        break;
      case "Venice":
        cinemaVenice().then((response) => setStateCinema(response));
        break;
      case "Sundance":
        cinemaSundance().then((response) => setStateCinema(response));
        break;
      // default:
      //   cinemaCannes().then((response) => setStateCinema(prevState));
    }
  }, [cinemaFest]);

  return (
    <div className="cinema">
      <CinemaHeader
        cinemaFestActive={cinemaFestActive}
        cinemaFest={cinemaFest}
      />
      <CinemaMain stateCinema={stateCinema} />
      <footer className="cinema__footer">{/* <Test /> */}</footer>
    </div>
  );
};

export default Cinema;
