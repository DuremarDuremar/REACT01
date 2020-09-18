import React from "react";
import { Route, Switch } from "react-router-dom";
import RedGlobalFeed from "./pages/redGlobalFeed/redClobalFeed";
import RedArticle from "./pages/redArticle/redArticle";
import Authentication from "./pages/authentication/authentication";
import RedYourFeed from "./pages/redYourFeed/redYourFeed";
import RedCreate from "./pages/redCreate/redCreate";

const RedRoutes = () => {
  return (
    <Switch>
      <Route path="/red" component={RedGlobalFeed} exact />
      <Route path="/red/articles/new" component={RedCreate} />
      <Route path="/red/feed" component={RedYourFeed} exact />
      <Route path="/red/login" component={Authentication} />
      <Route path="/red/register" component={Authentication} />
      <Route path="/red/articles/:slug" component={RedArticle} />
    </Switch>
  );
};

export default RedRoutes;
