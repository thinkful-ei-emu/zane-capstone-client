import React from 'react';


export default function LoginForm(props){

  return(

    <section className='login-form-section' role='main'>
      <form className='login-form' onSubmit={props.handlesubmit}>
        <label>Enter Username</label>
        <input name='user_name'aria-label='user name' type='text' required></input>
        <label>Enter Password</label>
        <input name='password'aria-label='password' type='password'required></input>
        <button type='submit'className='submitbutton'>Submit</button>
      </form>
      <p className='red'>{props.error}</p>
    </section>
  )

}