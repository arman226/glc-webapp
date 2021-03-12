import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from '../../components/listitem/ListItem';
import * as Actions from '../../modules/testApi/actionCreators';

const Home = ({ navigation, resultList, fetchTestApiStart }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTestApiStart();
  }, []);

  return (
    <div className={classes.content}>
      <ol>
        {resultList &&
          resultList.map(({ id, title }) => (
            <ListItem key={id} title={title} />
          ))}
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
  const { isLoading } = testApi;
  return { resultList, isLoading };
};

const actions = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(select, actions)(Home);
