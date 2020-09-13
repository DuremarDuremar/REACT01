import React, { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";

const UserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/user"
  );
  const [, setCurrentUserState] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      setCurrentUserState((state) => ({
        ...state,
        isLoggenId: false,
      }));
      return;
    }
    doFetch();
    setCurrentUserState((state) => ({
      ...state,
      isLoading: true,
    }));
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    }

    setCurrentUserState((state) => ({
      ...state,
      isLoggenId: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setCurrentUserState]);

  return children;
};

export default UserChecker;
