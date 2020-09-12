import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./authentication.scss";

const Authentication = (props) => {
  const isLogin = props.match.path === "/red/login";
  const pageTitle = isLogin ? "Sign in" : "Sign up";
  const linkText = isLogin ? "Need" : "Have";

  const userInput = () => {
    if (isLogin) {
      return;
    }

    return (
      <input
        type="text"
        placeholder="Username"
        className="authentication__user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    );
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [{ isLoading, response, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/users/login"
  );

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", password, email);
    doFetch({
      method: "post",
      data: {
        user: {
          email: "erfff@RTCRtpReceiver.ru",
          password: "33445990",
        },
      },
    });
  };

  return (
    <div className="red__authentication">
      <div className="red__authentication_container">
        <h1 className="authentication__title">{pageTitle}</h1>
        <div>
          <Link to="/red/register" className="authentication__link">
            {linkText} an account?
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          {userInput()}
          <input
            type="email"
            placeholder="Email"
            className="authentication__email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="authentication__password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {pageTitle}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
