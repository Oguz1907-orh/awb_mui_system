import React from 'react'
import {Button as MuiButton,makeStyles } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(0.5)
  },
  label: {
      textTransform: 'none'
  }
}))


export default function Buttonn(props) {

  const {text,button,size,color,variant,onClick,startIcon,...other} = props
  const classes = useStyles();

  return (
    // <Button
    //     variant="contained"
    //     color="primary"
    //     size="large"
    //     onClick={onclick}>{text}
    //     {<SaveIcon />}
    
    //     Submit
    //   </Button>

      <MuiButton
        variant={variant || "contained"}
        size={size || "large"}
        color={color || "primary"}
        onClick={onClick}
        {...other}
        classes={{ root:classes.root, label:classes.label }}>
          {text}
      </MuiButton>
  )
}
