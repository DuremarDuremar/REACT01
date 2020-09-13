import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import useLocalStorage from "../hooks/useLocalStorage";

export default (url) => {
  // const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  //берем токен из LocalStorage (21)
  const [token] = useLocalStorage("token");

  //завернули в useCallback, чтоб можно было добовлять в зависемость (22)
  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const requestOption = {
      ...options,
      ...{
        //проверка токеном залогинин ли пользователь при загрузке страницы (21)
        headers: {
          authorization: token ? `Token ${token}` : "",
        },
      },
    };
    if (!isLoading) {
      return;
    }
    axios(url, requestOption)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, error }, doFetch];
};
