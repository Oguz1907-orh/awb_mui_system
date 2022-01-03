import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { AppBar, CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';

import PageHeader from '../components/PageHeader';
import Awb from "../pages/Awb/Awb";




const useStyles = makeStyles({

  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes=useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        
        <Awb/>
      </div>

      <CssBaseline/>
    </>
    
    

  );
}

export default App;
