import React from "react";

const CinemaItem = ({ item, feed }) => {
  const { url, nameEn } = item;

  return (
    <div className="cinema__item">
      <p>{feed}</p>
      <img src={url} alt={nameEn}></img>
    </div>
  );
};

export default CinemaItem;
