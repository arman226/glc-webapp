import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, size, width, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            size={size || "small"}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
    
}
