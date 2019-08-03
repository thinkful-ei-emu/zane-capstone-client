import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component ={SignUp}/>
    </div>
  );
}

export default App;
