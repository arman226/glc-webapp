import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, makeStyles, RadioGroup } from '@material-ui/core';
import { PRIMARY_COLOR } from "../../styles/colors.styles";

const RadioGroup =({ name, label, value, onChange, items })=>{
    const classes = useStyles();
    
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio classes={{
                                root: classes.root,
                                checked: classes.checked,
                              }}/>} label={item.title}/>
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: PRIMARY_COLOR,
        '&$checked': {
          color: PRIMARY_COLOR,
        },
      },
      checked: {},
  }));

  export default RadioGroup;