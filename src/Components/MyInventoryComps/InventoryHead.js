import React from 'react';
import TokenServices from '../../services/token-service'
import {Redirect} from 'react-router'
export default class InventoryHead extends React.Component{
  state={redirect:false}
  logout=(e)=> {TokenServices.clearAuthToken()
  this.setState({redirect:true})}
  
  render(){
    const {redirect}=this.state
    if(redirect===true){
      return <Redirect to='/login'/>
    }
  return(

    <header className='inventory-head'>
      <h1>ZAP</h1>
      <h2>My Inventory</h2>
      <button onClick={this.logout}>Logout</button>
    </header>
  )
}
}