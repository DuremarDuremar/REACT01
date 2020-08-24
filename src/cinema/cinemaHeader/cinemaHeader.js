import React from "react";
import "./cinemaHeader.scss";
import logo from "../cinemaImages/cinemaLogo.jpg";

const CinemaHeader = () => {
  return (
    <header className="cinema__header">
      <div className="cinema__container cinema__header_wrapper">
        <div className="cinema__titls">
          <h2>Fellini</h2>
          <h2>Bergman</h2>
          <h2>Antonioni</h2>
          <h2>Lynch</h2>
          <h2>Tarr</h2>
          <h2>Ceylan</h2>
          <h2>Haneke</h2>
          <h2>Coen brothers</h2>
        </div>
        <div className="cinema__logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default CinemaHeader;
