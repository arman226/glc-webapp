import React, { useEffect }  from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, makeStyles } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
// import Controls from "../../components/controls/Controls";
import * as Actions from "../../modules/testApi/actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProgressIndicator from "../../components/progressIndicator";
import ErrorHandler from "../../components/errorHandler";
import { PRIMARY_COLOR, WHITE} from "../../styles/colors.styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    minWidth: 200,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
    // height: 50, 
    // width: '100%',
    // rowLength: 100000,
}))(TableRow);

function createData(name, calories, fat, carbs, protein, calcium) {
  return { name, calories, fat, carbs, protein, calcium };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 25),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 25),
  createData('Eclair', 262, 16.0, 24, 6.0, 25),
  createData('Cupcake', 305, 3.7, 67, 4.3, 25),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 25),
];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });


const Students = ({ fetchTestApiStart, isLoading, error }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTestApiStart();
  }, []);
  const history = useHistory();
    const redirectToTarget = () => {
       history.push("/student/addNewStudent");
      };

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
    <h2>Student Management</h2>
    <Button className={classes.add} type='submit' variant="contained" onClick={redirectToTarget}>Add New</Button>
    <Button className={classes.archive} type='submit' variant="contained">Archives</Button>
    <Paper className={classes.paper}></Paper>
    <Paper className={classes.paper}>
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Calcium&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
              <StyledTableCell align="right">{row.calcium}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
    
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
    marginTop:-10,
  },
  table: {
    minWidth: 700,
    
  },
  add: {
    margin:'10px 0', 
    color: WHITE,
    backgroundColor: PRIMARY_COLOR, 
    width:120,
  },
  archive: {
    margin:'10px 0', 
    marginLeft: 30,
    color: WHITE,
    backgroundColor: PRIMARY_COLOR, 
    width:120,
  },
   paper: {
      padding :30,
      margin:"50px auto", 
      borderRadius: 6, 
      borderTop: `5px solid #54c8e8`,
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

export default connect(select, actions)(Students);
