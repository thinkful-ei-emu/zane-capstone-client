import React from "react";

export default function Item(props) {
  return (
    <div className="inventory-items single-item">
      <table>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>QTY</th>
            <th>unit type</th>
            <th>price</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{props.item_name}</td>
            <td>{props.description}</td>
            <td>{props.quantity}</td>
            <td>{props.unit_type}</td>
            <td>{props.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
