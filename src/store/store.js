import React from "react";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { StoreProvider } from "./context/storeContext";
import StoreServer from "./services/storeServer";
import StoreMain from "./page/storeMain/storeMain";
import store from "./reducer/createStore";
import "./store.scss";
import "./storeAdaptive.scss";

const storeServer = new StoreServer();

const Store = () => {
  return (
    <Provider store={store}>
      <StoreProvider value={storeServer}>
        <Link to="/" className="store__exit">
          <button>
            Back <i class="fas fa-angle-double-left"></i>
          </button>
        </Link>
        <StoreMain />
      </StoreProvider>
    </Provider>
  );
};

export default Store;
