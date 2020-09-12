import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./redTopBar.scss";

const RedTopBar = () => {
  return (
    <nav className="red__top-bar">
      <div className="red__top-bar_container">
        <Link to="/">
          <h2>Medium</h2>
        </Link>
        <ul>
          <li>
            <NavLink to="/red" exact>
              <h4>Home</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/red/login">
              <h4>Sign in</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/red/register">
              <h4>Sign up</h4>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RedTopBar;
