import React from "react";
///ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
///COMPONENTS
import Home from "./home/home";
import Todo from "./todo/todo";
import Cinema from "./cinema/cinema";
import Red from "./red/red";
import Store from "./store/store";
//////////////////////////

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/todo" component={Todo} exact />
          <Route path="/cinema" component={Cinema} exact />
          <Route path="/red" component={Red} />
          <Route path="/store" component={Store} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//date.now
