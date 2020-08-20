import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Routes from "./router";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact when="always" component={Routes.Find} />
          <Route path="/find" exact component={Routes.Find} />
          <Route path="/login" exact component={Routes.Login} />
          <Route path="/search" exact component={Routes.Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
