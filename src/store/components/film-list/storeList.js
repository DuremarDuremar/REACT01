import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
  filmNext,
  filmPrev,
} from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { StoreItem1, StoreItem2 } from "../film-item/storeItem";
import ErrorIndicator from "../../../error/error-indicator";
import "./storeList.scss";

const StoreList = ({
  films,
  loading,
  error,
  page,
  StoreServer,
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
  filmNext,
  filmPrev,
}) => {
  useEffect(() => {
    filmRequested();
    StoreServer.getStoreServer()
      .then((data) => {
        filmLoaded(data);
      })
      .catch((err) => {
        filmError(err);
      });
  }, [StoreServer, filmLoaded, filmRequested, filmError, page]);

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  console.log(page);

  return (
    <>
      {loading ? (
        <div>Loaded</div>
      ) : (
        <ul className="store__home_list">
          <i
            className="fas fa-chevron-circle-left"
            onClick={() => filmPrev()}
          ></i>
          {films.map((film, index) => {
            if (index % 2 === 0) {
              return (
                <li key={film.id} className="store__home_item1">
                  <StoreItem1
                    film={film}
                    onAddedToCart={() => filmAdd(film.id)}
                  />
                </li>
              );
            } else {
              return (
                <li key={film.id} className="store__home_item2">
                  <StoreItem2
                    film={film}
                    onAddedToCart={() => filmAdd(film.id)}
                  />
                </li>
              );
            }
          })}
          <i
            className="fas fa-chevron-circle-right"
            onClick={() => filmNext()}
          ></i>
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({ filmList: { films, loading, error, page } }) => {
  return { films, loading, error, page };
};

const mapDispatchToProps = {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
  filmNext,
  filmPrev,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
