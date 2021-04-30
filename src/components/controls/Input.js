import React from 'react'
import { TextField } from '@material-ui/core';

const Input =({ name, size, width, label, value,error=null, onChange, ...other })=>{

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
export default Input;