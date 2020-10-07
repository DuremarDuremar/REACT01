import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { StoreProvider } from "./context/storeContext";
import StoreServer from "./services/storeServer";
import StoreMain from "./page/storeMain/storeMain";
import store from "./reducer/createStore";
import "./storeAdaptive.scss";

const storeServer = new StoreServer();

const Store = () => {
  return (
    <Provider store={store}>
      <StoreProvider value={storeServer}>
        <Router>
          <StoreMain />
        </Router>
      </StoreProvider>
    </Provider>
  );
};

export default Store;
