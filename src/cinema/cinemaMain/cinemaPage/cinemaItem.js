import React from "react";

const CinemaItem = ({ item }) => {
  const { url, nameEn } = item;

  return (
    <div className="cinemaItem">
      <img src={url} alt={nameEn}></img>
    </div>
  );
};

export default CinemaItem;
