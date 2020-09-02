import React from "react";

const CinemaListItem = ({
  item,
  setCinemaItem,
  cinemaActive,
  classActive,
  cinemaWindow,
  cinemaItemContentAdap,
  classExit,
  numId,
}) => {
  const { name, year, filmId, nameEn } = item;

  const cinemaSet = () => {
    setCinemaItem(item);
  };

  console.log(numId);

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
    if (classExit) {
      classExit.classList.add("cinema__exit_active");
      classExit.classList.remove("cinema__item-wrap");
    }

    const contentItem = filmId == numId ? cinemaItemContentAdap() : null;
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
            {contentItem}
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
