import React, { useEffect } from "react";
import { Grid, Paper, Avatar, TextField, Button, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as Actions from "../../modules/testApi/actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProgressIndicator from "../../components/progressIndicator";
import ErrorHandler from "../../components/errorHandler";
import { useHistory } from "react-router-dom";
import { PRIMARY_COLOR, AVATAR_COLOR } from "../../styles/colors.styles";

const Login = ({ fetchTestApiStart, isLoading, error }) => {
    const history = useHistory();
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

    // const paperStyle={padding :50,height:'65vh',width:350, margin:"50px auto", borderRadius: 16, border: 5}
    // const avatarStyle={backgroundColor:'#1bbd7e'}
    // const btnstyle={margin:'50px 0', backgroundColor: '#c1edf7', width:120}
    // const textfieldStyle = {margin:'12px 0'}
  
    

    const redirectToTarget = () => {
      history.push("/");
     };

    return(
        
        <Grid className={classes.content}>
            <Paper className={classes.paper}>
                <Grid align='center'>
                     <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <br></br>
                <TextField className={classes.textfield} label='Username' variant="outlined" size='small' fullWidth required/>
                <TextField className={classes.textfield} label='Password' variant="outlined" size='small' type='password' fullWidth required/>
                <Button className={classes.button} type='submit' variant="contained" onClick={redirectToTarget}>Log in</Button>
            </Paper>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
      textAlign: 'center',
    },
    paper: {
      padding :50,
      height:'65vh',
      width:350, 
      margin:"50px auto", 
      borderRadius: 16, 
      borderTop: `5px solid #32cd32`,
    },
    avatar: {
      backgroundColor: AVATAR_COLOR,
    },
    button: {
      margin:'50px 0', 
      backgroundColor: PRIMARY_COLOR, 
      width:120,
    },
    textfield: {
      margin:'12px 0',
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

export default connect(select, actions)(Login);
