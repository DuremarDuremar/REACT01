import React from "react";

const CinemaItem = ({ item, feed }) => {
  const { url, nameEn } = item;

  const feedAll = feed.split(",");
  const feedCountry = feedAll[0];
  const feedAll2 = feedAll[1].split("(");
  const feedName = feedAll2[0];

  console.log(feedCountry);

  return (
    <div className="cinema__item">
      <div className="cinema__item-wrap">
        <img src={url} alt={nameEn}></img>
        <div className="cinema__feed">
          <h1>{feedName}</h1>
          <h2>{feedCountry}</h2>
        </div>
      </div>
    </div>
  );
};

export default CinemaItem;
