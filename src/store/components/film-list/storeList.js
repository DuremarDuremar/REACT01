import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
  filmNext,
  filmPrev,
  filmDecst,
  setToken,
  login,
  setName,
} from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { StoreItem1, StoreItem2, StoreItemAdap } from "../film-item/storeItem";
import ErrorIndicator from "../../../error/error-indicator";
import "./storeList.scss";

const StoreList = ({
  films,
  loading,
  error,
  page,
  decst,
  StoreServer,
  filmLoaded,
  filmRequested,
  filmError,
  filmDecst,
  filmAdd,
  filmNext,
  filmPrev,
  token,
  setToken,
  isLogin,
  login,
  setName,
  name,
}) => {
  const is992 = useMediaQuery({ query: "(min-width: 992px)" });
  const is531 = useMediaQuery({ query: "(min-width: 531px)" });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setName(localStorage.getItem("name"));
    filmRequested();
    filmDecst(is992);
    StoreServer.getStoreServer()
      .then((data) => {
        filmLoaded(data);
      })
      .catch((err) => {
        filmError(err);
      });
  }, [
    StoreServer,
    filmLoaded,
    filmRequested,
    filmError,
    filmDecst,
    page,
    is992,
    setToken,
    setName,
  ]);

  console.log("homeToken", token);

  useEffect(() => {
    if (token && name) {
      login(true);
    } else {
      login(false);
    }
  }, [token, name, login]);

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  // console.log(films);
  // console.log("decst", decst);
  return (
    <>
      {loading ? (
        <div>Loaded</div>
      ) : (
        <ul className="store__home_list">
          <i
            className="fas fa-chevron-circle-left fa-2x"
            onClick={() => filmPrev()}
          ></i>
          {decst &&
            films.map((film, index) => {
              if (index % 2 === 0) {
                return (
                  <li
                    key={film.id}
                    className="store__home_item1 store__home_item"
                  >
                    <StoreItem1
                      film={film}
                      onAddedToCart={() => filmAdd(film.id)}
                    />
                  </li>
                );
              } else {
                return (
                  <li
                    key={film.id}
                    className="store__home_item2 store__home_item"
                  >
                    <StoreItem2
                      film={film}
                      onAddedToCart={() => filmAdd(film.id)}
                    />
                  </li>
                );
              }
            })}
          {!decst &&
            films.map((film, index) => {
              return (
                <li
                  key={film.id}
                  className="store__home_item1 store__home_item"
                >
                  {is531 ? (
                    <StoreItem1
                      film={film}
                      onAddedToCart={() => filmAdd(film.id)}
                    />
                  ) : (
                    <StoreItemAdap
                      film={film}
                      onAddedToCart={() => filmAdd(film.id)}
                    />
                  )}
                </li>
              );
            })}

          <i
            className="fas fa-chevron-circle-right fa-2x"
            onClick={() => filmNext()}
          ></i>
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({
  filmList: { films, loading, error, page, decst },
  authentication: { token, isLogin, name },
}) => {
  return { films, loading, error, page, decst, token, isLogin, name };
};

const mapDispatchToProps = {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
  filmNext,
  filmPrev,
  filmDecst,
  setToken,
  login,
  setName,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
