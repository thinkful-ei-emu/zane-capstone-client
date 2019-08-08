import React from 'react';
import {Link} from 'react-router-dom';


export default class TableRow extends React.Component{
  
state={
  items:this.props.items,
  rerender:false
}
    
  
  render(){
  return(
    <tbody><tr>
        <td>{this.props.item_name}</td>
        <td>{this.props.description}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
        <td>{this.props.unit_type}</td>
        <td><Link to={'/update/'+this.props.id}> <button>Update</button></Link><button onClick={()=>this.props.delete(this.props.id)}>Delete</button></td>
        </tr>
        </tbody>
  )}
}
