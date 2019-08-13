import React from "react";
import InventoryHead from "./MyInventoryComps/InventoryHead";
import InventoryItems from "./MyInventoryComps/InventoryItems";
import items from "../tempstate";
import InvetoryApiServices from "../services/inventory-api-service";
import InventoryApiService from "../services/inventory-api-service";
import config from "../config";
import TokenService from "../services/token-service";
import '../CSS/MyInventory.css'

export default class MyInventory extends React.Component {
  state = {
    items,
    dbitems: [],
    deletes: InventoryApiService.deleteItem,
    sorted: false
  };
  deleteItem = id => {
    return fetch(`${config.API_ENDPOINT}/inventory/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(
      this.setState({
        dbitems: this.state.dbitems.filter(item => item.id !== id)
      })
    );
  };

  sortByName = () => {
    this.state.dbitems.sort(function(a, b) {
      const nameA = a.item_name.toUpperCase();
      const nameB = b.item_name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({ sorted: true });
  };
  sortByLocation = () => {
    this.state.dbitems.sort(function(a, b) {
      const nameA = a.location.toUpperCase();
      const nameB = b.location.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({ sorted: true });
  };

  sortByPrice=()=>{
    this.state.dbitems.sort(function(a, b) {
      return a.price-b.price
     })}
     sortedPrice=()=>{
       this.sortByPrice()
       this.setState({sorted:true})
       console.log('I just Ran Sorted Price')

     }

  componentDidMount() {
    InvetoryApiServices.getInventory().then(res =>
      this.setState({ dbitems: res })
    );
    console.log(this.state.dbitems);
  }
  componentWillUnmount() {}

  render() {
    const { dbitems } = this.state;
    console.log(dbitems);
    return (
      <div>
        <InventoryHead />
        <InventoryItems
          items={dbitems}
          delete={this.deleteItem}
          sortName={this.sortByName}
          sortPrice={this.sortedPrice}
          sortLocation={this.sortByLocation}

        />
      </div>
    );
  }
}
