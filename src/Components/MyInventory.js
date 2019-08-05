import React from 'react';
import InventoryHead from './MyInventoryComps/InventoryHead';
import InventoryItems from './MyInventoryComps/InventoryItems';

export default class MyInventory extends React.Component{
  render(){
    return(
      <div>
        <InventoryHead/>
        <InventoryItems/>
      </div>
    )
  }
}