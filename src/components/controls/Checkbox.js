import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox,Grid } from '@material-ui/core';

export default function Checkbox(props) {

    const { name, label, value, onChange } = props;


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <Grid item xs={12} sm={12} className="flex">
        <FormControl >
            <FormControlLabel 
                
                control={<MuiCheckbox 
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
        </Grid>
    )
}