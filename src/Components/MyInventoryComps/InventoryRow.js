import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTrashAlt,faEdit} from '@fortawesome/free-solid-svg-icons'
import '../../CSS/table.css'




export default class TableRow extends React.Component{
  
state={
  items:this.props.items,
  rerender:false
}

deletes=<FontAwesomeIcon icon={faTrashAlt}/>
 updates=<FontAwesomeIcon icon={faEdit}/>
    
  
  render(){
  return(
    <tbody><tr>
        <td className='text'>{this.props.item_name}</td>
        <td className='text'>{this.props.description}</td>
        <td>{this.props.quantity}</td>
        <td className='text'>{this.props.unit_type}</td>
        <td>${this.props.price}</td>
        <td className='text'>{this.props.location}</td>
        <td className='updelete'><Link to={'/update/'+this.props.id}> <button aria-label='update button' className='cellbutton updates'>{this.updates}</button></Link><button aria-label='delete button' className='cellbutton deletes' onClick={()=>this.props.delete(this.props.id)}>{this.deletes}</button></td>
        </tr>
        </tbody>
  )}
}
