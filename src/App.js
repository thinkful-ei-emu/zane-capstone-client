import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import LoginPage from './Components/LoginPage';
import MyInventory from './Components/MyInventory';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component ={SignUp}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route path='/inventory/:userId' component={MyInventory}/>
    </div>
  );
}

export default App;
