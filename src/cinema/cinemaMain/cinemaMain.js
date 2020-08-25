import React, { useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import getSend from "../cinemaServer/cinemaServer";
import "./cinemaMain.scss";

const CinemaMain = () => {
  const [cinemaItem, setCinemaItem] = useState(null);

  const Start = async () => {
    console.log(await getSend("20&page=1"));
  };

  return (
    <div className="cinema__main">
      <button onClick={Start}>ggggggggggggggggg</button>
      <CinemaPage dataCinema={cinemaItem} />
    </div>
  );
};

export default CinemaMain;
