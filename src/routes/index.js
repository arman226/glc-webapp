import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "../components/navmenu";
import Test from "../pages/test";

const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Route exact path="/" component={Test} />
      </Router>
    </>
  );
};

export default RootRoute;
