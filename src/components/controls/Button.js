import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core';
import { PRIMARY_COLOR, WHITE } from "../../styles/colors.styles";

const Button =({ text, size, justify, variant, onClick, ...other })=>{
    const classes = useStyles();

    return (
        <MuiButton 
            variant = { variant || "contained"}
            size = { size || "large"}
            justify = {justify || "flex-end"}
            onClick = { onClick }
            { ...other }
            classes = {{ root: classes.root, label: classes.label}}>
            { text }
            </MuiButton>

    )
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5),
        backgroundColor: PRIMARY_COLOR,
    },
    label: {
        color: WHITE,
        
    },
}))

export default Button;