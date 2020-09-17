import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./redFeedToggle.scss";

import { CurrentUserContext } from "../contexts/currentUser";

const RedFeedToggle = ({ tagNames }) => {
  const [currentUserState] = useContext(CurrentUserContext);

  return (
    <div className="red__feedToggle">
      <ul>
        {currentUserState.isLoggedIn && (
          <li>
            <NavLink className="red__feedToggle_link" to="/red/feed">
              Your Feed
            </NavLink>
          </li>
        )}
        <li>
          <NavLink className="red__feedToggle_link" to="/red/" exact>
            Global Feed
          </NavLink>
        </li>
        {tagNames && (
          <li>
            <NavLink
              className="red__feedToggle_link"
              to={`/red/tags/${tagNames}`}
            >
              {tagNames}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RedFeedToggle;
