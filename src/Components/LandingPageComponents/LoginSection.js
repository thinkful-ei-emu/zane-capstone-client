import React from 'react';
import {Link} from 'react-router-dom';



export default function LoginSection(){

  return (

    <section className='login-section'>
      <Link classname='loginlink' to='/login'>Login</Link>
    </section>
  )
}