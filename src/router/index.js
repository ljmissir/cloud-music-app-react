import React from "react";
import Routes from "./routerConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Redirect = Routes.find((route) => route.path === "/find");

export default function CloudRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact when="always" component={Redirect.component} />
        {Routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
