import React from 'react';
import Header from './LandingPageComponents/Header ';
import LoginForm from './LoginPageComponents/LoginForm';
import AuthApiServices from '../services/auth-api-service';
import TokenServices from '../services/token-service';
import {Redirect} from 'react-router'




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
    console.log(res.error)
  })

}
  render(){
    const {redirect}=this.state
    if(redirect===true){
      return <Redirect to='/myinventory'/>
    }

  return(
    <div>
      <Header/>
      <LoginForm handlesubmit={this.handleSubmitJwtAuth}/>
    </div>

  )
}
}