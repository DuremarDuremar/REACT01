import React from "react";
import "./cinemaHeader.scss";
import logo from "../cinemaImages/cinemaLogo.jpg";

const CinemaHeader = () => {
  return (
    <header className="cinema__header">
      <div className="cinema__container cinema__header_wrapper">
        <div className="cinema__titls">
          <h2>Sundance</h2>
          <h2>Venice</h2>
          <h2>Cannes</h2>
          <h2>Berlin</h2>
        </div>
        <div className="cinema__logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default CinemaHeader;
