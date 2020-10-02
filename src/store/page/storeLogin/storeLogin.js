import React from "react";
import "./storeLogin.scss";

const StoreLogin = () => {
  return (
    <div className="store__authentication">
      <form>
        <input
          className="store__authentication_email"
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="store__authentication_password"
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default StoreLogin;
