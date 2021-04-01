import React from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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



const Students = () => {
  const classes = useStyles();
  return (
    
    <div className='test'>test users
    <div className={classes.content}>
    
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

    </div>
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
  },
  table: {
    minWidth: 700,
    
  },
}));

export default Students;
