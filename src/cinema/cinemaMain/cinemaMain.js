import React, { useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import getSend, { cinemaUrl } from "../cinemaServer/cinemaServer";
import "./cinemaMain.scss";

const CinemaMain = () => {
  const [cinemaItem, setCinemaItem] = useState(null);

  useEffect(() => {
    cinemaCann();
  }, []);

  const cinemaCann = () => {
    setCinemaItem(getSend(`${cinemaUrl}20&page=1`));
  };

  console.log(cinemaItem);

  return (
    <div className="cinema__main">
      <CinemaPage />
    </div>
  );
};

export default CinemaMain;
