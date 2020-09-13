import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUser";
import BackendErrorMessages from "../../components/backendErrorMessages";
import "./authentication.scss";

const Authentication = (props) => {
  const isLogin = props.match.path === "/red/login";
  const pageTitle = isLogin ? "Sign in" : "Sign up";
  const linkText = isLogin ? "Need" : "Have";
  const descLink = isLogin ? "/red/register" : "/red/login";
  const apiUrl = isLogin ? "/users/login" : "/users";

  const userInput = () => {
    if (isLogin) {
      return;
    }

    return (
      <input
        type="text"
        placeholder="Username"
        className="authentication__user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    );
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  const [, setToken] = useLocalStorage("token");

  const [{ isLoading, response, error }, doFetch] = useFetch(
    `https://conduit.productionready.io/api${apiUrl}`
  );

  // console.log("dd", currentUserState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", password, email);
    const user = isLogin ? { email, password } : { email, password, username };
    doFetch({
      method: "post",
      data: {
        user,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.user.token);
    setIsSuccess(true);
    setCurrentUserState((state) => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setToken, setCurrentUserState]);

  if (isSuccess) {
    return <Redirect to="/red" />;
  }

  return (
    <div className="red__authentication">
      <div className="red__authentication_container">
        <h1 className="authentication__title">{pageTitle}</h1>
        <div>
          <Link to={descLink} className="authentication__link">
            {linkText} an account?
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <BackendErrorMessages backendErrors={error.errors} />}
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
