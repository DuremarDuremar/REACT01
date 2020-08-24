import React from "react";
///ROUTER
import { BrowserRouter as Router, Route } from "react-router-dom";
///COMPONENTS
import Home from "./home/home";
import Todo from "./todo/todo";
import Feed from "./feed/feed";
//////////////////////////

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/feed" component={Feed} exact />
      </div>
    </Router>
  );
}

export default App;
