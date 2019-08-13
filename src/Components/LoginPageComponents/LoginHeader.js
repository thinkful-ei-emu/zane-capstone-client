import React from 'react';
import {Link} from 'react-router-dom';



export default function LoginNavBar (){
  return (

    <nav className='nav-bar'><Link to='/'><h1 className='zapnav'>ZAP</h1></Link><p className='memberparagraph'>Not a Member Yet? Sign up <Link to='/signup' className='herelink'>Here</Link></p></nav>
  )
}