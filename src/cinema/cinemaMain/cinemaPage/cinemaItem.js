import React from "react";

const CinemaItem = ({ item }) => {
  const { url, nameEn } = item;

  //   console.log(index);

  return (
    <div className="cinemaItem">
      <img src={url} alt={nameEn}></img>
    </div>
  );
};

export default CinemaItem;

// const { url, filmId, name, nameEn, year } = item;
