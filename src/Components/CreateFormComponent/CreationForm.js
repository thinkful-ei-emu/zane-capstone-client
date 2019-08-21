import React from "react";
import "../../CSS/createform.css";

export default function CreationForm(props) {
  return (
    <section className="signupformsection createformsection" role="main">
      <form className="sign-up-form" onSubmit={props.handleSubmit}>
        <label>Item Name</label>
        <input name="item_name" aria-label="Item Name" type="text" required />
        <label>Description</label>
        <input
          name="description"
          aria-label="Item Description"
          type="text"
          required
        />
        <label>Quantity</label>
        <input
          name="quantity"
          aria-label="Item Quantity"
          type="number"
          required
        />
        <label>Unit Type</label>
        <select name="unit_type" aria-label="selector">
          <option aria-label="pieces" value="pcs">
            pcs
          </option>
          <option value="lbs" aria-label="pounds">
            lbs
          </option>
          <option value="ea" aria-label="each">
            ea
          </option>
          <option value="cases" aria-label="cases">
            cases
          </option>
          <option value="oz" aria-label="ounces">
            oz
          </option>
          <option value="ft." aria-label="feet">
            ft.
          </option>
          <option value="gal." aria-label="gallons">
            gal.
          </option>
        </select>
        <label>Price</label>
        <input
          name="price"
          aria-label="Item Price"
          step=".01"
          min="0"
          type="number"
          required
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          aria-label="Item Location"
          required
        />

        <button className="submitbutton" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
