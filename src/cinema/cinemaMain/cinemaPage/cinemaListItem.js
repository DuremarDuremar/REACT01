import React from "react";

const CinemaListItem = ({
  item,
  setCinemaItem,
  cinemaActive,
  classActive,
  cinemaWindow,
  cinemaItemContentDecstop,
}) => {
  const { name, year, filmId, nameEn } = item;

  const cinemaSet = () => {
    setCinemaItem(item);
  };

  const cinemaDecst = () => {
    return (
      <span
        id={filmId}
        title={nameEn || name}
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

  const cinemaAdap = () => {
    return (
      <>
        <span
          id={filmId}
          title={nameEn || name}
          className={classActive}
          onClick={(event) => cinemaActive(event.currentTarget)}
        >
          <span onClick={cinemaSet}>
            <h3>{name}</h3>
            <span className="cinema__item_year">{year}</span>
            <div> {cinemaItemContentDecstop()}</div>
          </span>
        </span>
      </>
    );
  };

  const cinemaListItemContent =
    cinemaWindow < 865 ? cinemaAdap() : cinemaDecst();

  return <>{cinemaListItemContent}</>;
};

export default CinemaListItem;
