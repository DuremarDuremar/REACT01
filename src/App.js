import React from "react";
///ROUTER
import { BrowserRouter as Router, Route } from "react-router-dom";
///COMPONENTS
import Home from "./home/home";
//////////////////////////

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Route path="/" component={Home} exact />
      </div>
    </Router>
  );
}

export default App;
