import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreHome from "./storeHome";
import StoreCart from "./storeCart";

const StoreMain = () => {
  return (
    <div>
      <Switch>
        <Route path="/store" component={StoreHome} exact />
        <Route path="/store/cart" component={StoreCart} />
      </Switch>
    </div>
  );
};

export default StoreMain;
