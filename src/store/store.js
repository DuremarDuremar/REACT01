import React from "react";
import { StoreProvider } from "./components/context/storeContext";
import StoreServer from "./services/storeServer";
import StoreMain from "./components/page/storeMain";

const Store = () => {
  return (
    <StoreProvider value={StoreServer}>
      <StoreMain />
    </StoreProvider>
  );
};

export default Store;
