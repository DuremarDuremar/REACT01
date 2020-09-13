import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({ children }) => {
  //создаем управляющий загрузкой юзера стэйт (19)
  const [state, setState] = useState({
    isLoading: false, //загрузка юзера
    isLoggedIn: null, //залогини юзер или нет, или неизвестно
    currentUser: null, // данные с сервера
  });

  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
