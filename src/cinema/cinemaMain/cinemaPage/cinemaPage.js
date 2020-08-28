import React from "react";
import "./cinemaPage.scss";

const CinemaPage = ({ dataCinema }) => {
  const page = dataCinema.map(function (item) {
    const { url, filmId, name, nameEn, year } = item;
    return (
      <div className="cinema__page" key={filmId}>
        <h1>{name}</h1>
        <img src={url}></img>
        <p>{nameEn}</p>
        <span>{year}</span>
      </div>
    );
  });

  console.log(dataCinema);

  return <div>{page}</div>;
};
export default CinemaPage;
