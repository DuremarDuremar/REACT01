import React, { createContext, useReducer } from "react";

export const CurrentUserContext = createContext();

//создаем управляющий загрузкой юзера стэйт (19)
const initialState = {
  isLoading: false, //загрузка юзера
  isLoggedIn: null, //залогини юзер или нет, или неизвестно
  currentUser: null, // данные
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_AUTHOREZ":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const CurrentUserProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
