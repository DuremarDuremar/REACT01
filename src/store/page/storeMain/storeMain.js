import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreHome from "../storeHome/storeHome";
import StoreCart from "../storeCart/storeCart";
import StoreLogin from "../storeLogin/storeLogin";
import StoreHeader from "../../components/film-header/storeHeader";
import "./storeMain.scss";

const StoreMain = () => {
  return (
    <div className="store__main">
      <div className="store__container">
        <StoreHeader />
        <div className="store__content">
          <Switch>
            <Route path="/store" component={StoreHome} exact />
            <Route path="/store/cart" component={StoreCart} />
            <Route path="/store/login" component={StoreLogin} />
            <Route path="/store/register" component={StoreLogin} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default StoreMain;
