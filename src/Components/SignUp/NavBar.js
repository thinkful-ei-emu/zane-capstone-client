import React from 'react';
import {Link} from 'react-router-dom';



export default function NavBar (){
  return (

    <nav className='nav-bar'><h1>ZAP Inventory</h1><p>Already a member Sign In <Link to='/login'>Here</Link></p></nav>
  )
}