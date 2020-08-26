import React, { useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import getSend, { cinemaCann } from "../cinemaServer/cinemaServer";
import "./cinemaMain.scss";

const StartCinema = () => {
  let cinema = [];
  cinemaCann().then((res) => {
    cinema.push(res);
  });
  return cinema;
};

// console.log(vvv());

const CinemaMain = () => {
  const [cinemaData, setCinemaData] = useState(StartCinema());

  // useEffect(() => {
  //   cinemaCann().then((res) => {
  //     setCinemaData(res);
  //   });
  // }, []);

  console.log(cinemaData);

  return (
    <div className="cinema__main">
      <button onClick={cinemaCann}>ggggggggggggggggg</button>
      <CinemaPage dataCinema={cinemaData} />
    </div>
  );
};

export default CinemaMain;
