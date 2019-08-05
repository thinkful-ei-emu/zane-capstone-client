import React from 'react';


export default function InventoryItems(props){

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
      <tbody><tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>placeholder</td>
        </tr>
        </tbody>
    </table>

    <button>Create New Item</button>
  </section>
)
}