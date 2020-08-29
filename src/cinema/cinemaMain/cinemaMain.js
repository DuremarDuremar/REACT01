import React, { useReducer, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import CinemaSpinner from "../cinemaServer/cinemaSpinner";
import { cinemaCann } from "../cinemaServer/cinemaServer";
import cannes from "../cinemaImages/cannes.jpg";
import "./cinemaMain.scss";

const CinemaMain = () => {
  const reducer = (state, action) => {
    return action;
  };

  const [state, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    cinemaCann().then((response) => dispatch(response));
  }, []);

  // console.log(state);

  if (!state) return <CinemaSpinner />;
  return (
    <div className="cinema__main">
      <div className="cinema__container">
        <div className="cinema__festival">
          <h1>Cannes</h1> <img src={cannes} alt="cannes"></img>
        </div>
        <CinemaPage dataCinema={state} />
      </div>
    </div>
  );
};

export default CinemaMain;
