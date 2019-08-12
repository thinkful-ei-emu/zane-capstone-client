import React from 'react';


 export default function CreationForm(props){
  return(
    <section>
      <form onSubmit={props.handleSubmit}>
        <label>Item Name</label>
        <input name='item_name' type='text' required></input>
        <label>Description</label>
        <input name='description' type='text'required></input>
        <label>Quantity</label>
        <input name='quantity' type='number'required></input>
        <label>Unit Type</label>
        <select name='unit_type'>
          <option value='pcs'>pcs</option>
          <option value='lbs'>lbs</option>
          <option value='ea'>ea</option>
          <option value='cases'>cases</option>
          <option value='oz'>oz</option>
          <option value='ft.'>ft.</option>
          <option value='gal.'>gal.</option>
          </select>
        <label>Price</label>
        <input name='price' type='number'required></input>
        <label>Location</label>
        <input type='text' name='location' required></input>

        <button type='submit'>Submit</button>
        
      </form>
    </section>
  )
}