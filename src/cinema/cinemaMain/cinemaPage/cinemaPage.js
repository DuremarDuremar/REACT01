import React, { useState, useEffect } from "react";
import "./cinemaPage.scss";

const CinemaPage = ({ dataCinema }) => {
  const [cinemaItem, setCinemaItem] = useState([]);

  useEffect(() => {
    setCinemaItem(dataCinema);
  }, []);

  // const [cinemaElem, setCinemaElem] = useState(dataCinema);
  //   const page = (dataCinema) => {
  //     dataCinema.map(function (item) {
  //       // const { id, name, nameEn, year } = item;
  //       // return (
  //       //   <div className="cinema__page" key={id}>
  //       //     <h1>{name}</h1>
  //       //     <p>{nameEn}</p> <span>{year}</span>
  //       //   </div>
  //       // );
  //       return item;
  //     });
  //   };

  // console.log(dataCinema);

  return <div>3</div>;
};

export default CinemaPage;
