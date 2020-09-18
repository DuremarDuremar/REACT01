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
  //проверка на успешный сабмит (16)
  const [isSuccess, setIsSuccess] = useState(false);
  const [, dispatch] = useContext(CurrentUserContext);
  //стэйт для взаимодействия с useLocalStorage (17)
  const [, setToken] = useLocalStorage("token");

  const [{ isLoading, response, error }, doFetch] = useFetch(
    `https://conduit.productionready.io/api${apiUrl}`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = isLogin ? { email, password } : { email, password, username };
    doFetch({
      method: "post",
      data: {
        user,
      },
    });
  };

  ///сохраняем token в LocalStorage (16)
  useEffect(() => {
    if (!response) {
      return;
    }
    //передаем значение токена в наш useLocalStorage (17)
    setToken(response.user.token);
    //подтверждение успешного сабмита (16)
    setIsSuccess(true);
    //иеняем информацию в управляющим стэйте о состоянии загрузки юзера (19)
    dispatch({ type: "SET_AUTHOREZ", payload: response.user });
  }, [response, setToken, dispatch]);

  //проверка на успешный сабмит, при успехи редеректим на главную страницу (16)
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
