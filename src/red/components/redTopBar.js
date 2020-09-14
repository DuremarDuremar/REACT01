import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./redTopBar.scss";
import { CurrentUserContext } from "../contexts/currentUser";
import no_avatar from "../redImages/no-avatar.png";

const RedTopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  console.log(currentUserState);

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
          {currentUserState.isLoggedIn === false && (
            <>
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
            </>
          )}
          {currentUserState.isLoggedIn === true && (
            <>
              <li>
                <NavLink to="/red/articles/new" className="red__posts_link">
                  <i className="fas fa-feather-alt fa-2x"></i>
                  <h4>New Posts</h4>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/red/profiles/${currentUserState.currentUser.username}`}
                  className="red__posts_link"
                >
                  <img className="red__user_pic" src={no_avatar} alt="" />
                  <h4>{currentUserState.currentUser.username}</h4>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default RedTopBar;
