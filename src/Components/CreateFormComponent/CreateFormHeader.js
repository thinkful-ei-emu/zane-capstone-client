import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import {Redirect} from 'react-router';

export default class CreateFormHeader extends React.Component{
  
  state={redirect:false}
  
  logout=(e)=>{TokenService.clearAuthToken()
    this.setState({redirect:true})
  }
  
  
  
  
  render(){
    const {redirect}=this.state
    if(redirect===true){
      return <Redirect to='/login'/>
    }
  return(
  <header className='landing-page-header createformsection logoutbuttons'>
    <h1 className='zapnav'>ZAP</h1>
    <Link className='herelink inventorybutton' to='/inventory'><button className='submitbutton inventorybutton'>Inventory</button></Link>
    <button className='submitbutton' onClick={this.logout}>Logout</button>
  </header>
  )
}
}