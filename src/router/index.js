import React from "react";
import * as Routes from "./routerConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function CloudRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact when="always" component={Routes.Find} />
        <Route path="/find" exact component={Routes.Find} />
        <Route path="/login" exact component={Routes.Login} />
        <Route path="/search" exact component={Routes.Search} />
        <Route path="/searchResult" exact component={Routes.SearchResult} />
        <Route path="/singer" exact component={Routes.Singer} />
        <Route path="/songs" exact component={Routes.Songs} />
      </Switch>
    </Router>
  );
}
