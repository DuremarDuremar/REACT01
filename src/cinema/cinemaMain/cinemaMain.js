import React from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import CinemaSpinner from "../cinemaServer/cinemaSpinner";

import cannes from "../cinemaImages/cannes.png";
import "./cinemaMain.scss";

const CinemaMain = ({ stateCinema }) => {
  // console.log(stateCinema);

  if (!stateCinema) return <CinemaSpinner />;
  return (
    <div className="cinema__main">
      <div className="cinema__container">
        <div className="cinema__festival">
          <p>
            Луис Бунюэль, Робер Брессон, Ингмар Бергман, Терренс Малик, Вернер
            Херцог, Андрей Тарковский, Вим Вендерс, Мартин Скорсезе, Роберт
            Олтмен, Братья Коэн, Михаэль Ханеке, Гас Ван Сент
          </p>
          <img src={cannes} alt="cannes"></img>
          <h1>Festival international du film de Cannes</h1>
        </div>
        <CinemaPage dataCinema={stateCinema} />
      </div>
    </div>
  );
};

export default CinemaMain;
