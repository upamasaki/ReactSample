import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Input} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {Button} from '@material-ui/core'
import TextField from './../components/TextField'


const Home = () => {
  return (
    <div>
    <h3>Criate a file</h3>
      <TextField />
      <Button variant="contained" color="primary" >
        Next
      </Button>
      </div>
  )
}

export default Home
