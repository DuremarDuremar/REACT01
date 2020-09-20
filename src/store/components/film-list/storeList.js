import React from "react";
import { connect } from "react-redux";
import StoreItem from "../film-item/storeItem";

const StoreList = ({ films }) => {
  console.log(films);

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

export default connect(mapStateToProps)(StoreList);
