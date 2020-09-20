import React from "react";
import { StoreConsumer } from "./storeContext";

const StoreHOC = () => (Wrapped) => {
  return (props) => {
    return (
      <StoreConsumer>
        {(StoreServer) => {
          return <Wrapped {...props} StoreServer={StoreServer} />;
        }}
      </StoreConsumer>
    );
  };
};

export default StoreHOC;
