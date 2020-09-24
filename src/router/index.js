import React from "react";
import Routes from "./routerConfig";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const redirect = Routes.find((route) => route.path === "/find");

export default function CloudRoute() {
  return (
    <Router>
      <Switch>
        {Routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
        <Redirect to="/login" component={redirect.component} />
      </Switch>
    </Router>
  );
}
