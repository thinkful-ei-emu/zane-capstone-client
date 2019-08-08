import React from 'react';


export default function LoginForm(props){

  return(

    <section>
      <form className='login-form' onSubmit={props.handlesubmit}>
        <label>Enter Username</label>
        <input name='user_name' type='text'></input>
        <label>Enter Password</label>
        <input name='password' type='password'></input>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )

}