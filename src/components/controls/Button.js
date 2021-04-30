import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core';
import { PRIMARY_COLOR } from "../../styles/colors.styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5),
        backgroundColor: PRIMARY_COLOR,
        // justifyItems:"center"
    },
    label: {
        color: 'white',
        
    },
}))

export default function Button(props) {
    const { text, size, justify, variant, onClick, ...other } = props
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
