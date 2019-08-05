import React from 'react';


export default function LoginForm(props){

  return(

    <section>
      <form className='login-form'>
        <label>Enter Username</label>
        <input name='username' type='text'></input>
        <label>Enter Password</label>
        <input name='password' type='password'></input>
        <button>Submit</button>
      </form>
    </section>
  )

}