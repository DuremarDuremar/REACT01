import React from "react";
import { Route, Switch } from "react-router-dom";
import RedGlobalFeed from "./pages/redGlobalFeed/redClobalFeed";
import RedArticle from "./pages/redArticle/redArticle";

const RedRoutes = () => {
  return (
    <Switch>
      <Route path="/red" component={RedGlobalFeed} exact />
      <Route path="/red/articles/:slug" component={RedArticle} />
    </Switch>
  );
};

export default RedRoutes;
