import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

//import logo from './img/logo.png';
//import viper from './img/viper.png';
import logo from './logo.svg';
import viper from './logo.svg';


import './App.css';
//import Title from './components/Title'
//import Container from './components/Container'
//import FileInput from './components/FileInput'
//import {Input} from '@material-ui/core'
//import {Box} from '@material-ui/core'
//import {Button} from '@material-ui/core'

//import UploadVehicle from './pages/UploadVehicle'
//import Home from './pages/Home'

const drawerWidth = 240

const App = () => {
  const [text, setText] = useState('')
  const handleText = (newValue) => {
    setText(newValue);
  }
  return (

      <BrowserRouter>
      <div>
        <nav>

    <img src={logo} alt='company-logo' style={{width:600, height:150}}/>
    
    <img src={viper} alt='viper' style={{width:600, height:50}}/>

          {/*<Input type="text" value={text} onChange={e=> handleText(e.target.value)} />*/}

          <ul>
          <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            </li>
            </ul>
          </nav>

            <Switch>
          <Route path='/'>
            </Route>

        </Switch>
        </div>
      </BrowserRouter>
  )
}


export default App;
