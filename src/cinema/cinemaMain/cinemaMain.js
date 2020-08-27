import React, { useReducer, useState, useEffect } from "react";
import CinemaPage from "./cinemaPage/cinemaPage";
import { cinemaCann } from "../cinemaServer/cinemaServer";
import "./cinemaMain.scss";

const CinemaMain = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    cinemaCann().then((response) => {
      setData(response);
    });
  }, []);

  console.log(data);
  console.log(44);
  if (!data) return null;
  return <CinemaRender data={data} />;
};

// const StartCinema = async (func) => {
//   const result = await func();
//   console.log(result);
//   return result;
// };

const CinemaRender = ({ data }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, data);

  console.log(state);

  return (
    <div className="cinema__main">
      <button onClick={cinemaCann}>ggggggggggggggggg</button>
      <CinemaPage dataCinema={state} />
    </div>
  );
};

export default CinemaMain;
