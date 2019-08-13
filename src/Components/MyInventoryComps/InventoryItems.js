import React from 'react';
import {Link} from 'react-router-dom';
import TableRow from './InventoryRow';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons';

const sort=<FontAwesomeIcon icon={faSortAmountDownAlt}/>



export default function InventoryTable(props){

return(
  <section className='inventory-items'role='main'>
    <div className='sortbuttons'><button className='sortbutton' onClick={props.sortName}>{sort}A-Z</button>
    <button className='sortbutton' onClick={props.sortPrice}>{sort}Price</button>
    <button className='sortbutton' onClick={props.sortLocation}>{sort}Location</button></div>
    <table >
      <tbody>
        
        <tr><th>Item Name</th>
      <th aria-label='Item Description'>Item Description</th>
      <th aria-label='Quantity'>Qty</th>
      <th aria-label='Unit Type'>Unit Type</th>
      <th aria-label='Unit Price'>Unit Price</th>
      <th aria-label='Location'>Location</th>
      <th aria-label='Update and Delete'>Update/Delete</th></tr>
      </tbody>
      {props.items.map(item=>(<TableRow cd
       key={item.id} id={item.id}item_name={item.item_name} description={item.description} quantity={item.quantity} price={item.price} unit_type={item.unit_type} delete={props.delete} items={props.items} location={item.location}/>))}
    </table>

   <Link to='/create-form'><button className='createitembutton'>Create New Item</button></Link>
  </section>
)
}