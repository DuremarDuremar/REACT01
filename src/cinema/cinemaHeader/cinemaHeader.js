import React from "react";
import "./cinemaHeader.scss";
import logo from "../cinemaImages/cinemaLogo.jpg";

const CinemaHeader = ({ cinemaFestActive, cinemaFest }) => {
  // let classActiveFest = "cinema__active_fest";
  // // item.id === Number(cinemaFest) ? "cinema__active_fest" : null;

  const btnFest = [
    {
      id: "Sundance",
      label: "Sundance",
      classNames: "",
    },
    {
      id: "Venice",
      label: "Venice",
      classNames: "",
    },
    {
      id: "Cannes",
      label: "Cannes",
      classNames: "",
    },
    {
      id: "Berlin",
      label: "Berlin",
      classNames: "",
    },
  ];

  const festBtn = btnFest.map(function (item) {
    if (item.id == cinemaFest) {
      item.classNames += "cinema__active_fest";
    }
    return (
      <h2 className={item.classNames} id={item.id}>
        {item.label}
      </h2>
    );
  });

  return (
    <header className="cinema__header">
      <div className="cinema__container cinema__header_wrapper">
        <div
          className="cinema__titls"
          onClick={(event) => cinemaFestActive(event.target.id)}
        >
          {festBtn[0]}
          {festBtn[1]}
          {festBtn[2]}
          {festBtn[3]}
        </div>
        <div className="cinema__logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default CinemaHeader;
