import React from 'react';
import NavBar from './SignUpComponents/NavBar'
import SignUpForm from './SignUpComponents/SignUpForm';
import AuthApiService from '../services/auth-api-service'



export default class Signup extends React.Component  {
static defaultProps={
  onRegistrationSuccess: ()=>{}
}

  state={error:null}
 
 handleSubmit=e=>{

  e.preventDefault();

  const {user_name,password,user_email,first_name,last_name}=e.target;

  this.setState({error:null})

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
    this.props.onRegistrationSuccess()
  })

  .catch(res=>{
    this.setState({error:res.error})
  })


  console.log(user_name.value)
  console.log(password.value)
  console.log(user_email.value)
  console.log(first_name.value)
  console.log(last_name.value)
  console.log(this.state.error)



 }

 render(){

  return (

<div>
  <NavBar/>
  <p className='red'>{this.state.error}</p>
  <SignUpForm handleSubmit={this.handleSubmit.bind(this)}/>
  </div>
    
  )
}
}