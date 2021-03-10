import React from "react";
import { makeStyles } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <div>{process.env.REACT_APP_BASE_URL} he</div>
    </>
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
}));

export default Home;
