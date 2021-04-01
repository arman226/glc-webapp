import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../modules/testApi/actionCreators";
import ProgressIndicator from "../../components/progressIndicator";
import ErrorHandler from "../../components/errorHandler";

const Home = ({ resultList, fetchTestApiStart, isLoading, error }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTestApiStart();
  }, []);

  /**
   * show a loading indicator while fetching isn't done yet
   * see @reducer
   */
  if (isLoading) {
    return <ProgressIndicator />;
  }

  /**
   * every time an error occured,
   * always inform the users and give them the chance to
   * @reload
   */
  if (error) {
    return <ErrorHandler message={error} onRetry={fetchTestApiStart} />;
  }

  return (

    

    <div className={classes.content}>



      <ol>
        {resultList &&
          resultList.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ol>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const select = ({ testApi }) => {
  const resultList = testApi.data;
  const { isLoading, error } = testApi;
  return { resultList, isLoading, error };
};

const actions = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(select, actions)(Home);
