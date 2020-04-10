import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Input} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {Button} from '@material-ui/core'
import TextField from './../components/TextField'
import UploadVehicle from './UploadVehicle'

const Home = () => {
  return (
    <div>
      <Link to="/">
        <button>
          show PageOne when you click this!!
        </button>
      </Link>
      <br />
      <Link to="/pagetwo">
        <button>
          show PageTwo when you click this!!
        </button>
      </Link>
      <br />
      <Link to="/PageHome">
        <button>
          show PageTwo when you click this!!
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
    </div>
  );  
}

export default Home
