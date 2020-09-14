import { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";

//создаем компанент который получая данные юзера при загрузки страницы отрисовывает ее соответсвенно этому (21)
const UserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/user"
  );
  const [, setCurrentUserState] = useContext(CurrentUserContext);
  // смотрим токен пользователя (21)
  const [token] = useLocalStorage("token");

  useEffect(() => {
    //если токена нет (21)
    if (!token) {
      setCurrentUserState((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      return;
    }
    doFetch();
    setCurrentUserState((state) => ({
      ...state,
      // меняем управляющий стэйт, на пользователь проверяеться на регистрацию (21)
      isLoading: true,
    }));
  }, [token, setCurrentUserState, doFetch]);

  useEffect(() => {
    if (!response) {
      //если юзер не залогинин(21)
      return;
    }

    setCurrentUserState((state) => ({
      ...state,
      //пользователь зарегестрирован, меняем управляющий стэйт на юзер залогинин,
      //загрузка закончена, и получаем данные юзера (21)
      isLoggenId: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setCurrentUserState]);

  return children;
};

export default UserChecker;
