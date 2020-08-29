import React from "react";

import "./cinemaSpinner.scss";

const CinemaSpinner = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CinemaSpinner;
