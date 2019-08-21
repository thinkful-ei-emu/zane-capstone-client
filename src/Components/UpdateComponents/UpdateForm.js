import React from "react";

export default function UpdateForm(props) {
  return (
    <section className="signupformsection createformsection" role="main">
      <h2 className="headtwo">Edit Your Item</h2>
      <form className="sign-up-form" onSubmit={props.handleSubmit}>
        <label>Item Name</label>
        <input
          name="item_name"
          aria-label="Item Name"
          type="text"
          defaultValue={props.item_name}
          required
        />
        <label>Description</label>
        <input
          name="description"
          aria-label="Item Description"
          type="text"
          defaultValue={props.description}
          required
        />
        <label>Quantity</label>
        <input
          name="quantity"
          aria-label="Item Quantity"
          type="number"
          defaultValue={props.quantity}
          required
        />
        <label>Unit Type</label>
        <select
          name="unit_type"
          aria-label="Selector"
          defaultValue={props.unit_type}
        >
          <option aria-label="pieces" value="pcs">
            pcs
          </option>
          <option aria-label="pounds" value="lbs">
            lbs
          </option>
          <option aria-label="each" value="ea">
            ea
          </option>
          <option aria-label="cases" value="cases">
            cases
          </option>
          <option aria-label="ounces" value="oz">
            oz
          </option>
          <option aria-label="feet" value="ft.">
            ft.
          </option>
          <option aria-label="gallons" value="gal.">
            gal.
          </option>
        </select>
        <label>Price</label>
        <input
          name="price"
          aria-label="Item Price"
          type="number"
          step=".01"
          min="0"
          defaultValue={props.price}
          required
        />
        <label>Location</label>
        <input
          name="location"
          aria-label="Item Location"
          type="text"
          defaultValue={props.location}
          required
        />

        <button type="submit" className="submitbutton">
          Update
        </button>
      </form>
    </section>
  );
}
