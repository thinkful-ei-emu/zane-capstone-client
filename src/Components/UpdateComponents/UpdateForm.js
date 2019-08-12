import React from 'react';


 export default function UpdateForm(props){
  return(
    <section>
      <h2>Edit Your Item</h2>
      <form onSubmit={props.handleSubmit}>
        <label>Item Name</label>
        <input name='item_name' type='text' defaultValue={props.item_name} required></input>
        <label>Description</label>
        <input name='description' type='text' defaultValue={props.description} required></input>
        <label>Quantity</label>
        <input name='quantity' type='number'defaultValue={props.quantity} required></input>
        <label>Unit Type</label>
        <select name='unit_type' defaultValue={props.unit_type} >
          <option value='pcs'>pcs</option>
          <option value='lbs'>lbs</option>
          <option value='ea'>ea</option>
          <option value='cases'>cases</option>
          <option value='oz'>oz</option>
          <option value='ft.'>ft.</option>
          <option value='gal.'>gal.</option>
          </select> 
        <label>Price</label>
        <input name='price' type='number' defaultValue={props.price} required></input>
        <label>Location</label>
        <input name='location' type='text' defaultValue={props.location} required></input>

        <button type='submit'>Update</button>
        
      </form>
    </section>
  )
}