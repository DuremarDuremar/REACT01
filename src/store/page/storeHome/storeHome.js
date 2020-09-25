import React from "react";
import StoreList from "../../components/film-list/storeList";
import StoreTable from "../../components/film-table/storeTable";
import "./storeHome";

const StoreHome = () => {
  return (
    <div className="store__home">
      <StoreList />
      <StoreTable />
    </div>
  );
};

export default StoreHome;
