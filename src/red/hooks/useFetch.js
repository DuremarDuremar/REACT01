import { useState, useEffect } from "react";
import axios from "axios";

import useLocalStorage from "../hooks/useLocalStorage";

export default (url) => {
  // const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    const requestOption = {
      ...options,
      ...{
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
  }, [isLoading, options, url]);

  return [{ isLoading, response, error }, doFetch];
};
