import React from "react";
import { Route } from "react-router";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "../components/navmenu";
import Routes from "./Routes";

const RootRoute = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <NavMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {Routes.map(({ path, component, key }) => (
            <Route key={key} exact path={path} component={component} />
          ))}
        </main>
      </div>
    </Router>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
  },
}));
export default RootRoute;
