import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

const Title = props => {
  return(
    <React.Fragment>
    {console.log(props)}
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">

        </IconButton>
      <Typography variant="h6" style={{paddingLeft:40}}>
        Menu
      </Typography>
      <Button color="inherit" style={{paddingLeft:500}}>Login</Button>
      </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default Title
