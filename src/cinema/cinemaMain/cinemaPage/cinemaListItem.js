import React from "react";

const CinemaListItem = ({
  item,
  setCinemaItem,
  cinemaActive,
  classActive,
  cinemaWindow,
  cinemaItemContentAdap,
  numId,
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
    const contentItem = filmId === numId ? cinemaItemContentAdap() : null;
    return (
      <>
        <span
          id={filmId}
          title={nameEn || name}
          className={classActive}
          onClick={(event) => cinemaActive(event.currentTarget)}
        >
          <span onClick={cinemaSet}>
            <span className="cinema__item_info">
              <h3>{name}</h3>
              <p>{year}</p>
            </span>
          </span>
        </span>
        {contentItem}
      </>
    );
  };

  const cinemaListItemContent =
    cinemaWindow < 865 ? cinemaAdap() : cinemaDecst();

  return <>{cinemaListItemContent}</>;
};

export default CinemaListItem;
