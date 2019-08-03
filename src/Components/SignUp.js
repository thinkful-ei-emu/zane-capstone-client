import React from 'react';
import NavBar from '../Components/SignUp/NavBar'
import SignUpForm from './SignUp/SignUpForm';
import AuthApiService from '../services/auth-api-service'



export default class Signup extends React.Component  {
static defaultProps={
  onRegistrationSuccess: ()=>{}
}

  state={error:null}
 handleSubmit=e=>{

  e.preventDefault();

  const {user_name,password,user_email}=e.target;

  this.setState({error:null})

  AuthApiService.postUser({
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