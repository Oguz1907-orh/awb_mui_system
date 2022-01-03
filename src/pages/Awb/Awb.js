import React,{useState} from 'react'
import AwbForm from './AwbForm';
import PageHeader from '../../components/PageHeader';
import  PeopleOutlineTwoToneIcon  from '@material-ui/icons/PeopleTwoTone';
import {makeStyles, Paper} from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/controls/Popup';


const useStyles = makeStyles(theme =>({

    PageContent:{
      margin:theme.spacing(5),
      padding:theme.spacing(3)
    },
    newButton:{
      position:'absolute',
      top:'190px',
      right:'37px'
    }
}))



export default function Awb() {

  const classes = useStyles();
  const [openPopup, setOpenPopup] =useState(false)


  return (
    <>
      <PageHeader
          title="Awb Page"
          subTitle="Awb Description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}


        />
        <Controls.Button
            color="primary"
            text = "+"
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}


          // text="Add New"
          // variant="outlined"
          // startIcon = {<AddIcon />}
          // className={classes.newButton}
          // onClick={() => setOpenPopup(true)}
        />
        <Paper className={classes.PageContent}>
        
        </Paper>
        <Popup
          openPopup ={openPopup}
          setOpenPopup ={setOpenPopup}
        >
          <AwbForm/>
        </Popup>
    </>
  )
}
