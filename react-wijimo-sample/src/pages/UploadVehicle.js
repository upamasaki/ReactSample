import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Input} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import {Button} from '@material-ui/core'
import SelectClass from './../components/SelectClass'
//import VideoUpload from './../components/VideoUpload'
import SelectColor from './../components/SelectColor'


const UploadVehicle = () => {
  return (
    <div>
      <Link to="/">
        <button>
          HOME
        </button>
      </Link>
      <Link to="/UploadVehicle">
        <button>
          show UploadVehicle when you click this!!
        </button>
      </Link>
      <br />
      this page is PageHome!!!
      <br />
      <h3>Criate a file</h3>
          <h3>Select Class</h3>
      <nav>
        <SelectClass />
        <SelectClass />
        <SelectColor />
      </nav>
    </div>
  )
}

export default UploadVehicle
