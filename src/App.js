import React from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import LoginPage from './Components/LoginPage';
import MyInventory from './Components/MyInventory';
import CreateItem from './Components/create-item';
import UpatePage from './Components/UpdatePage';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

function App() {
  return (
    <div className="App">
      <PublicRoute exact path='/' component={LandingPage}/>
      <PublicRoute exact path='/signup' component ={SignUp}/>
      <PublicRoute exact path='/login' component={LoginPage}/>
      <PrivateRoute path='/inventory/' component={MyInventory}/>
      <PrivateRoute path='/create-form' component={CreateItem}/>
      <PrivateRoute path='/update/:itemid' component={UpatePage}/>
    </div>
  );
}

export default App;
