import React from "react";
import { Route, Switch } from "react-router";
import itemStore from "../stores/itemStore.js";
//components
import Home from "./Home.js";
import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";
import BakeryList from "./BakeryList.js";
import BakeryDetail from "./BakeryDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route path="/list/:cheeseCakeeSlug">
        <ItemDetail />
      </Route>
      <Route path="/list">
        <ItemList items={itemStore.items} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
