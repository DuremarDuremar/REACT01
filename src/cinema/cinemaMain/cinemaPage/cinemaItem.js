import React from "react";

const CinemaItem = ({ item }) => {
  const { url, nameEn } = item;

  return (
    <div className="cinema__item">
      <img src={url} alt={nameEn}></img>
    </div>
  );
};

export default CinemaItem;
