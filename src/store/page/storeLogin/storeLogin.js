import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, submit } from "../../reducer/action";
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
      .then((res) => {
        console.log("res", res);
        props.submit(false);
      })
      .catch((error) => {
        console.log("err", error);
        props.submit(false);
      });
  });

  console.log("sub", props.isSubmit);

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

const mapStateToProps = ({ authentication: { isLogin, isSubmit } }) => {
  return { isLogin, isSubmit };
};

const mapDispatchToProps = {
  login,
  submit,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreLogin)
);
