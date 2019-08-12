import React from 'react';
import {Link} from 'react-router-dom';
import TableRow from './InventoryRow';


export default function InventoryTable(props){

return(
  <section>
    <button onClick={props.sortName}>Sort Name A-Z</button>
    <button onClick={props.sortPrice}>Sort by Price lowest to highest</button>
    <button onClick={props.sortLocation}>Sort By Location Name</button>
    <table>
      <tbody>
        <tr><th>Item Name</th>
      <th>Item Description</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Unit Type</th>
      <th>Location</th>
      <th>Update/Delete</th></tr>
      </tbody>
      {props.items.map(item=>(<TableRow cd
       key={item.id} id={item.id}item_name={item.item_name} description={item.description} quantity={item.quantity} price={item.price} unit_type={item.unit_type} delete={props.delete} items={props.items} location={item.location}/>))}
    </table>

   <Link to='/create-form'><button>Create New Item</button></Link>
  </section>
)
}