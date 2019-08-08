import React from 'react';
import {Link} from 'react-router-dom';
import TableRow from './InventoryRow';


export default function InventoryTable(props){

return(
  <section>
    <table>
      <tbody>
        <tr><th>Item Name</th>
      <th>Item Description</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Unit Type</th>
      <th>Update/Delete</th></tr>
      </tbody>
      {props.items.map(item=>(<TableRow 
       key={item.id} id={item.id}item_name={item.item_name} description={item.description} quantity={item.quantity} price={item.price} unit_type={item.unit_type} delete={props.delete} items={props.items}/>))}
    </table>

   <Link to='/create-form'><button>Create New Item</button></Link>
  </section>
)
}