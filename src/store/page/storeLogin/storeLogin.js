import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  login,
  submit,
  loginUser,
  loginError,
  setToken,
} from "../../reducer/action";
import { Link, Redirect } from "react-router-dom";
import StoreHOC from "../../context/storeHOC";
import useStorage from "../../utils/useStorage";
import axios from "axios";
import "./storeLogin.scss";

const StoreLogin = ({
  match,
  submit,
  isSubmit,
  loginError,
  loginUser,
  userName,
  login,
  isLogin,
  setToken,
  token,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // const [token, setToken] = useStorage("token");

  const loginTrue = match.path === "/store/login";

  console.log("token", token);

  const user = useCallback(() => {
    if (loginTrue) {
      return { email, password };
    } else {
      return { username, email, password };
    }
  }, [loginTrue, username, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(true);
  };

  useEffect(() => {
    if (!isSubmit) {
      return;
    }
    axios(
      `https://conduit.productionready.io/api${
        loginTrue ? "/users/login" : "/users"
      }`,
      {
        method: "post",
        data: {
          user: user(),
        },
      }
    )
      .then((response) => {
        loginUser(response.data.user);
        submit(false);
      })
      .catch((error) => {
        loginUser(error);
        submit(false);
      });
  }, [user, loginTrue, submit, isSubmit, loginError, loginUser]);

  useEffect(() => {
    if (!userName) {
      return;
    }
    localStorage.setItem("token", userName.token);
    localStorage.setItem("name", userName.username);
    setToken(userName.token);

    login(true);
  }, [userName, login, setToken]);

  // console.log("token", userName);
  // console.log("log", isLogin);
  // console.log("user", userName);

  if (isLogin) {
    return <Redirect to="/store/" />;
  }

  return (
    <div className="store__authentication">
      <Link to={loginTrue ? "/store/register" : "/store/login"}>
        <p>{loginTrue ? "Need an account?" : "Have an account?"}</p>
      </Link>

      <form onSubmit={handleSubmit}>
        {!loginTrue && (
          <input
            className="store__authentication_name"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        )}
        <input
          className="store__authentication_email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="store__authentication_password"
          type="password"
          placeholder="Password"
          valur={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit" disabled={isSubmit}>
          {loginTrue ? "Sign in" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  authentication: { isLogin, isSubmit, error, userName, token },
}) => {
  return { isLogin, isSubmit, userName, error, token };
};

const mapDispatchToProps = {
  login,
  submit,
  loginUser,
  loginError,
  setToken,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreLogin)
);
