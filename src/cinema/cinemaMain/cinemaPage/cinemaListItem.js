import React from "react";

const CinemaListItem = ({ item, setCinemaItem }) => {
  const { name, year } = item;

  const cinemaActive = (event) => {
    console.log(event);
    event.classList.add("cinema__li_active");
  };

  const cinemaSet = () => {
    setCinemaItem(item);
  };

  return (
    <span className="" onClick={(event) => cinemaActive(event.currentTarget)}>
      <span onClick={cinemaSet}>
        <h3>{name}</h3>
        <span className="cinema__item_year">{year}</span>
      </span>
    </span>
  );
};

export default CinemaListItem;
