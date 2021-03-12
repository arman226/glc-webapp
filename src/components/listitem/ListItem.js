import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../styles/colors.styles';

const ListItem = ({ title }) => {
  const classes = useStyles();
  return (
    <Box fontWeight='fontWeightBold'>
      <li className={classes.list}>{title}</li>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  list: {
    width: '40%',
    backgroundColor: PRIMARY_COLOR,
  },
}));
export default ListItem;
