import React from 'react';
import InventoryHead from './MyInventoryComps/InventoryHead';
import InventoryItems from './MyInventoryComps/InventoryItems';
import items from '../tempstate';
import InvetoryApiServices from '../services/inventory-api-service';
import InventoryApiService from '../services/inventory-api-service';
import config from '../config';
import TokenService from '../services/token-service'



export default class MyInventory extends React.Component{
  state={
    items,
    dbitems:[],
    deletes:InventoryApiService.deleteItem,
  }
  deleteItem=(id)=>{
    return fetch(`${config.API_ENDPOINT}/inventory/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'Authorization':`bearer ${TokenService.getAuthToken()}`
    },
     
    })
    .then(this.setState({dbitems:this.state.dbitems.filter(item=>item.id!==id)}))
    
  }
  
  componentDidMount(){
    InvetoryApiServices.getInventory()
    .then(res=>this.setState({dbitems:res}))
    console.log(this.state.dbitems)
  }
  componentWillUnmount(){
    
  }


  render(){
    const {dbitems}=this.state
    return(
      <div>
        <InventoryHead/>
        <InventoryItems items={dbitems} delete={this.deleteItem}/>
      </div>
    )
  }
}