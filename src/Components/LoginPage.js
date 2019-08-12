import React from 'react';
import Header from './LandingPageComponents/Header ';
import LoginForm from './LoginPageComponents/LoginForm';
import AuthApiServices from '../services/auth-api-service';
import TokenServices from '../services/token-service';
import {Redirect} from 'react-router'
import{Link} from 'react-router-dom';





export default class LoginPage extends React.Component{

state={error:null,
redirect:false,}

  handleSubmitJwtAuth=(e)=>{
  e.preventDefault();
  const {user_name,password}=e.target

  // TokenServices.saveAuthToken(TokenServices.makeBasicAuthToken(user_name.value,password.value))

  

  AuthApiServices.postLogin({
    user_name:user_name.value,
    password:password.value,
  })
  .then(res=>{
    user_name.value=''
    password.value=''
TokenServices.saveAuthToken(res.authToken)
this.setState({redirect:true})
  })
  .catch(res=>{
    this.setState({error:res.error})
  })

}
  render(){
    const {redirect,error}=this.state
    if(redirect===true){
      return <Redirect to='/inventory/1'/>
    }

  return(
    <div>
      
      <Header/>
      <LoginForm handlesubmit={this.handleSubmitJwtAuth}/>
      <p className='red'>{error}</p>
      <p>Not a Member yet? Sign Up <Link to='/signup'>Here</Link></p>
    </div>

  )
}
}