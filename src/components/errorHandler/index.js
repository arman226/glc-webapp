import React from "react";
import { makeStyles, Typography, Button, Box } from "@material-ui/core";
import { PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";

/**
 *
 * @param message  the error message to be displayed
 * @param onRetry function to execute when the "Retry" button is clicked
 *
 */
const ErrorHandler = ({ message, onRetry }) => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Typography className={classes.errorMessage}>{message}</Typography>
      <Button onClick={onRetry} variant="contained" className={classes.button}>
        Retry
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: window.innerHeight,
  },
  errorMessage: {
    textAlign: "center",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    color: WHITE,
    marginTop: 15,
  },
}));

export default ErrorHandler;
