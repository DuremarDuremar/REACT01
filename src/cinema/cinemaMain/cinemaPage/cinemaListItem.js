import React from "react";

const CinemaListItem = ({ item, setCinemaItem, cinemaActive, classActive }) => {
  const { name, year, filmId, nameEn } = item;

  const cinemaSet = () => {
    setCinemaItem(item);
  };

  return (
    <span
      id={filmId}
      title={nameEn}
      className={classActive}
      onClick={(event) => cinemaActive(event.currentTarget)}
    >
      <span onClick={cinemaSet}>
        <h3>{name}</h3>
        <span className="cinema__item_year">{year}</span>
      </span>
    </span>
  );
};

export default CinemaListItem;
