import React from 'react';
import {Link} from 'react-router-dom';
import TableRow from './InventoryRow';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons';

const sort=<FontAwesomeIcon icon={faSortAmountDownAlt}/>



export default function InventoryTable(props){

return(
  <section className='inventory-items'role='main'>
    <div className='sortbuttons'>
      {/* <button className='sortbutton' onClick={props.sortName}>{sort}Name</button>
    <button className='sortbutton' onClick={props.sortPriceD}>{sort}Price</button>
    <button className='sortbutton' onClick={props.sortLocation}>{sort}Location</button> */}
    <Link className='createbutton' to='/create-form'><button className='createbutton sortbutton'>Create Item</button></Link>
    </div>
    <table >
      <tbody>
        
        <tr><th onClick={props.state.sorted===false?props.sortNameD:props.sortNameA}>{props.state.nameup===true?<p className='arrow'>&uarr;</p>:''}Item Name{props.state.nameup===false?<p className='arrow'>&darr;</p>:''}</th>
      <th aria-label='Item Description'>Item Description</th>
      <th aria-label='Quantity'>Qty</th>
      <th aria-label='Unit Type'>Unit Type</th>
      <th aria-label='Unit Price'onClick={props.state.sorted===false?props.sortPriceA:props.sortPriceD}><p onClick={props.sortPriceA}></p>{props.state.priceup===true?<p className='arrow'>&uarr;</p>:''}Unit Price{props.state.priceup===false?<p className='arrow'>&darr;</p>:''}</th>
<th className aria-label='Location'onClick={props.state.sorted===false?props.sortLocationD:props.sortLocationA}>{props.state.up===true?<p className='arrow'>&uarr;</p>:''}Location {props.state.up===false?<p className='arrow'>&darr;</p>:''} </th>
      <th aria-label='Update and Delete'>Update/Delete</th></tr>
      </tbody>
      {props.items.map(item=>(<TableRow cd
       key={item.id} id={item.id}item_name={item.item_name} description={item.description} quantity={item.quantity} price={item.price} unit_type={item.unit_type} delete={props.delete} items={props.items} location={item.location}/>))}
    </table>

  
  </section>
)
}