import { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";

//создаем компанент который получая данные юзера при загрузки страницы отрисовывает ее соответсвенно этому (21)
const UserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/user"
  );
  const [dis, dispatch] = useContext(CurrentUserContext);
  // смотрим токен пользователя (21)
  const [token] = useLocalStorage("token");

  useEffect(() => {
    //если токена нет (21)
    if (!token) {
      dispatch({ type: "SET_UNAUTHORIZED" });
      return;
    }
    doFetch();
    // меняем управляющий стэйт, на пользователь проверяеться на регистрацию (21)
    dispatch({ type: "LOADING" });
    return;
  }, [token, dispatch, doFetch]);

  useEffect(() => {
    if (!response) {
      //если юзер не залогинин(21)
      return;
    }

    //пользователь зарегестрирован, меняем управляющий стэйт на юзер залогинин,
    //загрузка закончена, и получаем данные юзера (21)
    dispatch({ type: "SET_AUTHOREZ", payload: response.user });
  }, [response, dispatch]);

  return children;
};

export default UserChecker;
