import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct'
export default (
  <Switch>
    <AppliedRoute path="/" exact component={Products} />
    <AppliedRoute path="/AddProduct" exact component={AddProduct} />
    <AppliedRoute path="/Edit/:id" component={EditProduct}/>
  </Switch>
);
