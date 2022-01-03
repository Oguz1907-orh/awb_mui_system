
import React, {useState, useEffect} from 'react'
import { TextField,Grid, makeStyles,FormControl,FormLabel,RadioGroup,Radio,FormControlLabel } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import * as awbService from "../../components/services/awbService";

const useStyles = makeStyles(theme=>({ //ALT ALTA YAZMAK İÇİN KULLANDIĞIMIZ KISIM 

  root:{
      '& .MuiFormControl-root':{
        width:'80%',
        margin:theme.spacing(1)
      }
  }


}))


const initialFValues={ //INPUTLARIN BURADA TANIMLANMASI
    id:0,
    awbNo:'',
    originAirport:'',
    airline:'',
    awbDate:new Date(),
    destinationAirport:'',
    forwarder:'',
    houseAwb:false,
    import:false,
    export:false

}


export default function AwbForm() {

  const [values, setValues] =useState(initialFValues);
  const classes = useStyles();

  const handleInputChange = e=>{  //inputların içine değerler girilmesi için kullandığımız method. 
    const {name,value}=e.target
    setValues({
        ...values,
        [name]:value

    })
  }
  
  return (

    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
            
            <Controls.Checkbox 
                        name="houseAwb"
                        label="house Awb"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
            {/* <Controls.Checkbox
                        name="import"
                        label="import"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
            <Controls.Checkbox
                        name="export"
                        label="export"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />                   */}
            <TextField
                variant="outlined"
                label="Awb No"
                name="awbNo"
                values={values.awbNo}
                onChange={handleInputChange}

            />
            <Controls.Select
                name="originAirport"
                label="Origin Airport"
                values={values.originAirport}
                onChange={handleInputChange}
                options={awbService.getOriginAirport()}

            />
            <Controls.Select
                name="airline"
                label="airline"
                values={values.airline}
                onChange={handleInputChange}
                options={awbService.getOriginAirport()}

            />
            <Controls.Button
                  type="Cancel"
                  text="Cancel"
                  color="secondary"/>
            </Grid>
            
            <Grid item xs={6}>
            
            {/* <Controls.DatePicker
                name="awbDate"
                label="Awb Date"
                values={values.awbDate}
                onChange={handleInputChange}
                
            /> */}
            <TextField
                id="awbDate"
                label="awbDate"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
  />
            <Controls.Select
                name="destinationAirport"
                label="Destination Airport"
                values={values.destinationAirport}
                onChange={handleInputChange}
                options={awbService.getOriginAirport()}
            />
            <Controls.Select
                name="forwarder"
                label="forwarder"
                values={values.forwarder}
                onChange={handleInputChange}
                options={awbService.getOriginAirport()}
            />
           
            {/* <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              
              className={classes.Button}

            /> */}
            
            <div>
                
                <Controls.Button
                  type="Reset"
                  text="Reset"
                  color="default"/>
                
                <Controls.Button
                  type="Submit"
                  text="Submit" />

            </div>

          </Grid>
      </Grid>
    </form>
    
  )
}
