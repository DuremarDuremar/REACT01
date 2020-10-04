import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, submit, loginResponse, loginError } from "../../reducer/action";
import { Link } from "react-router-dom";
import StoreHOC from "../../context/storeHOC";
import axios from "axios";
import "./storeLogin.scss";

const StoreLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const loginTrue = props.match.path === "/store/login";
  const user = loginTrue ? { email, password } : { username, email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", email, password);
    // window.open("/store");
    // <Link to="/store"></Link>;
    // props.login();
    props.submit(true);
  };

  useEffect(() => {
    if (!props.isSubmit) {
      return;
    }
    axios(
      `https://conduit.productionready.io/api${
        loginTrue ? "/users/login" : "/users"
      }`,
      {
        method: "post",
        data: {
          user: user,
        },
      }
    )
      .then((data) => {
        props.loginResponse(data);
        props.submit(false);
      })
      .catch((error) => {
        props.loginError(error);
        props.submit(false);
      });
  }, [props, user, loginTrue]);

  useEffect(() => {
    if (!props.response) {
      return;
    }
    localStorage.setItem("token", props.response.data.user.token);
  }, [props.response]);

  console.log("res", props.response);

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

        <button type="submit" disabled={props.isSubmit}>
          {loginTrue ? "Sign in" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  authentication: { isLogin, isSubmit, error, response },
}) => {
  return { isLogin, isSubmit, response, error };
};

const mapDispatchToProps = {
  login,
  submit,
  loginResponse,
  loginError,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreLogin)
);
