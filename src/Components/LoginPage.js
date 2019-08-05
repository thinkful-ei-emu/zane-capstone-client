import React from 'react';
import Header from './LandingPageComponents/Header ';
import LoginForm from './LoginPageComponents/LoginForm';
import AuthApiServices from '../services/auth-api-service';




export default class LoginPage extends React.Component{
handleSubmit=(e)=>{
  e.preventDefault();
  const {user_name,password}=e.target

  AuthApiServices.postUser({
    user_name:user_name.value,
    password:password.value,
  })
  .then(res=>{
    user_name.value=''
    password.value=''
  })
  .catch(res=>{
    this.setState({
      error:res.error
    })
  })

}
  render(){

  return(
    <div>
      <Header/>
      <LoginForm/>
    </div>

  )
}
}