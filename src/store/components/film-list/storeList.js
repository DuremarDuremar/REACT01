import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
} from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import { StoreItem1, StoreItem2 } from "../film-item/storeItem";
import ErrorIndicator from "../../../error/error-indicator";
import StoreTable from "../film-table/storeTable";
import "./storeList.scss";

const StoreList = ({
  films,
  loading,
  error,
  StoreServer,
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
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
  }, [StoreServer, filmLoaded, filmRequested, filmError]);

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  return (
    <>
      {loading ? (
        <div>Loaded</div>
      ) : (
        <ul className="store__home_list">
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
        </ul>
      )}
      <StoreTable />
    </>
  );
};

const mapStateToProps = ({ films, loading, error }) => {
  return { films, loading, error };
};

const mapDispatchToProps = {
  filmLoaded,
  filmRequested,
  filmError,
  filmAdd,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
