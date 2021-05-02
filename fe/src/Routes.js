import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Recipes, Planner } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/recipes">
        <Recipes />
      </Route>
      <Route path="/planner">
        <Planner />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
