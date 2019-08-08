import React from 'react';


 export default function SignUpForm(props){
  return(

    <section className='signup-section'>
      <form className='sign-up-form' onSubmit={props.handleSubmit}>
        <label>Enter First Name</label>
        <input name='first_name' type='text'></input>
        <label>Enter Last Name</label>
        <input name='last_name' type='text'></input>
        <label> Enter Username</label>
        <input type='text' name='user_name'></input>
        <label>Enter Password</label>
        <input type='password' name='password'></input>
        <label>Enter Email</label>
        <input type='text' name='user_email'></input>
        <button type='submit'>Submit</button>

      </form>
    </section>
  )
}