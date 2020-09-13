import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RedRoutes from "./redRoutes";
import RedTopBar from "./components/redTopBar";
import { CurrentUserProvider } from "./contexts/currentUser";
import UserChecker from "./components/userChecker";
import "./red.scss";

const Red = () => {
  return (
    <div className="red">
      <CurrentUserProvider>
        <UserChecker>
          <Router>
            <RedTopBar />
            <RedRoutes />
          </Router>
        </UserChecker>
      </CurrentUserProvider>
    </div>
  );
};

export default Red;
