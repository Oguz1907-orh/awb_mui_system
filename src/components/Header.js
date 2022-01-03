import { AppBar, Toolbar,Grid,InputBase,IconButton,Badge, makeStyles } from '@material-ui/core'
import React from 'react'
import  NotificationsNoneIcon  from '@material-ui/icons/NotificationsNone'
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'



const useStyles = makeStyles({
    root:{

        backgroundColor:'#fff'
    
    },
    searchInput:{
      opacity:'0.6',
      padding:'0px 8px',
      fontsize:'0.8rem'
    }

})

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item  >
              <InputBase 
                placeholder="Search..."
                startAdornment={<SearchIcon fontSize="small"/>}
                className={classes.searchInput}
              />

          </Grid>
          <Grid item sm></Grid>
          <Grid item >
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon fontSize="small"/>

                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <ChatBubbleOutlineIcon fontSize="small"/>
                </Badge>
              </IconButton>
              <IconButton>
                
                  <PowerSettingsNewIcon/>
                
              </IconButton>
          </Grid>
        </Grid>

      </Toolbar>



    </AppBar>
  )
}
