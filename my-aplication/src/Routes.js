import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
export default (
  <Switch>
    <AppliedRoute path="/" exact component={Products} />
    <AppliedRoute path="/AddProduct" exact component={AddProduct} />
  </Switch>
);
