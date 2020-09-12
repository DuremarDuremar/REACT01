import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RedRoutes from "./redRoutes";
import RedTopBar from "./components/redTopBar";
import "./red.scss";

const Red = () => {
  return (
    <div className="red">
      <Router>
        <RedTopBar />
        <RedRoutes />
      </Router>
    </div>
  );
};

export default Red;
