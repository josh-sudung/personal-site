import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Main from "../Main";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" /> */}
    </Switch>
  </Router>
)

export default Routes;