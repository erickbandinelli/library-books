import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./privateRoutes";
import PublicRoute from "./publicRoutes";

import Home from "../pages/home";
import PageListBooks from "../pages/listBooks";
import timerLogout from "../utils/timerLogout";
import PageListBook from "../pages/viewBook";

const Routes = () => {

  useEffect(() => {
    timerLogout()
  }, [])

  return (
    <Router history={history}>
      <Switch>
          <PublicRoute
              restricted={true}
              exact
              path="/"
              component={Home} />
          <PrivateRoute
              exact
              path="/list-books"
              component={PageListBooks} />
          <PrivateRoute
              exact
              path="/view-book/:id"
              component={PageListBook} />
      </Switch>
    </Router>
  );
};

export default Routes;