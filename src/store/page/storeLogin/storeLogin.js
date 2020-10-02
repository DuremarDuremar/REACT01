import React, { useState } from "react";
import "./storeLogin.scss";

const StoreLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", email, password);
  };

  return (
    <div className="store__authentication">
      <p>Need an account?</p>
      <form onSubmit={handleSubmit}>
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

export default StoreLogin;
