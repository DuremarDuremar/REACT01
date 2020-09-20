import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filmLoaded } from "../../reducer/action";
import StoreHOC from "../../context/storeHOC";
import StoreItem from "../film-item/storeItem";

const StoreList = ({ films, StoreServer, filmLoaded }) => {
  useEffect(() => {
    const data = StoreServer.getStoreServer();
    filmLoaded(data);
  }, [StoreServer, filmLoaded]);

  return (
    <ul>
      {films.map((film) => {
        return (
          <li key={film.id}>
            <StoreItem film={film} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ films }) => {
  return { films };
};

const mapDispatchToProps = {
  filmLoaded,
};

export default StoreHOC()(
  connect(mapStateToProps, mapDispatchToProps)(StoreList)
);
