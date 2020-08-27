import React from "react";
import Routes from "./routerConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function CloudRoute() {
  return (
    <Router>
      <Switch>
        {Routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              component={routeItem.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
