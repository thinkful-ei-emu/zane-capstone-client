import React from 'react';
import NavBar from './SignUpComponents/NavBar'
import SignUpForm from './SignUpComponents/SignUpForm';
import AuthApiService from '../services/auth-api-service'
import {Redirect} from 'react-router';
import '../CSS/SignupPage.css'



export default class Signup extends React.Component  {
static defaultProps={
  history:{
    push:()=>{},
  },
}

handleRegistrationSuccess=user=>{
  const{history}=this.props
  history.push('/login')
}

  state={error:null,
  redirect:false,}
 
 handleSubmit=e=>{

  e.preventDefault();

  const {user_name,password,user_email,first_name,last_name}=e.target;

  this.setState({error:null,
  redirect:false})

  AuthApiService.postUser({
    first_name:first_name.value,
    last_name:last_name.value,
    user_name:user_name.value,
    password:password.value,
    user_email:user_email.value
  })

  .then(user=>{
    user_name.value=''
    password.value=''
    user_email.value=''
    first_name.value=''
    last_name.value=''
    this.setState({
      redirect:true
    })
  })

  .catch(res=>{
    this.setState({error:res.error})
  })





 }

 render(){
   const redirect=this.state.redirect;
   if(redirect===true){
     return <Redirect to='/login'/>
   }

  return (

<div>
  <NavBar/>
  <SignUpForm error={this.state.error} handleSubmit={this.handleSubmit.bind(this)}/>
  
  </div>
    
  )
}
}