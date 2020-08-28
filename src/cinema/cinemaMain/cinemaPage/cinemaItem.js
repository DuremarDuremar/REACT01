import React from "react";

const CinemaItem = ({ item }) => {
  const { url, filmId, name, nameEn, year } = item;

  return (
    <div>
      <img src={url}></img>
    </div>
  );
};

export default CinemaItem;
