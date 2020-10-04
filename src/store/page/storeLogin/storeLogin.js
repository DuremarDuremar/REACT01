import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../reducer/action";
import { Link } from "react-router-dom";
import StoreHOC from "../../context/storeHOC";
import "./storeLogin.scss";

const StoreLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const loginTrue = props.match.path === "/store/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", email, password);
    // window.open("/store");
    // <Link to="/store"></Link>;
    props.login();
  };

  console.log(loginTrue);

  return (
    <div className="store__authentication">
      <p>Need an account?</p>

      <form onSubmit={handleSubmit}>
        {!loginTrue && (
          <input
            className="store__authentication_name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authentication: { isLogin } }) => {
  return { isLogin };
};

const mapDispatchToProps = {
  login,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreLogin)
);
