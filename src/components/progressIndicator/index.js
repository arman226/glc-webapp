import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { PRIMARY_COLOR } from "../../styles/colors.styles";

const ProgressIndicator = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <CircularProgress className={classes.progressIndicator} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    display: "flex",
    height: window.innerHeight,
  },
  progressIndicator: {
    color: PRIMARY_COLOR,
  },
}));

export default ProgressIndicator;
