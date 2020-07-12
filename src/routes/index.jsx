import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import PageListBooks from "../pages/listBooks";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list-books" component={PageListBooks} />
      </Switch>
    </BrowserRouter>
  );
};

export default (Routes);