import React from "react";
import InventoryHead from "./MyInventoryComps/InventoryHead";
import InventoryItems from "./MyInventoryComps/InventoryItems";
import items from "../tempstate";
import InvetoryApiServices from "../services/inventory-api-service";
import InventoryApiService from "../services/inventory-api-service";
import config from "../config";
import TokenService from "../services/token-service";
import "../CSS/MyInventory.css";

export default class MyInventory extends React.Component {
  state = {
    items,
    dbitems: [],
    deletes: InventoryApiService.deleteItem,
    sorted: false,
    up: null,
    priceup: null,
    nameup: null
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

  sortByNameD = () => {
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
    this.setState({ sorted: true, up: null, priceup: null, nameup: true });
  };
  sortByNameAsc = () => {
    this.state.dbitems.sort(function(a, b) {
      const nameA = a.item_name.toUpperCase();
      const nameB = b.item_name.toUpperCase();

      let comparison = 0;
      if (nameA < nameB) {
        comparison = 1;
      } else if (nameA > nameB) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({ sorted: false, up: null, priceup: null, nameup: false });
  };
  sortByLocationD = () => {
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
    this.setState({ sorted: true, up: true, priceup: null, nameup: null });
  };

  sortByLocationAsc = () => {
    this.state.dbitems.sort(function(a, b) {
      const nameA = a.location.toUpperCase();
      const nameB = b.location.toUpperCase();

      let comparison = 0;
      if (nameA < nameB) {
        comparison = 1;
      } else if (nameA > nameB) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({ sorted: false, up: false, priceup: null, nameup: null });
  };

  sortByPrice = () => {
    this.state.dbitems.sort(function(a, b) {
      return a.price - b.price;
    });
  };
  sortByPriceDes = () => {
    this.state.dbitems.sort(function(a, b) {
      return b.price - a.price;
    });
  };
  sortedPriceA = () => {
    this.sortByPrice();
    this.setState({ sorted: true, priceup: true, up: null });
  };

  sortedPriceD = () => {
    this.sortByPriceDes();
    this.setState({ sorted: false, priceup: false, up: null });
  };

  componentDidMount() {
    InvetoryApiServices.getInventory().then(res =>
      this.setState({ dbitems: res })
    );
  }
  componentWillUnmount() {}

  render() {
    const { dbitems } = this.state;

    return (
      <div>
        <InventoryHead />
        <InventoryItems
          state={this.state}
          items={dbitems}
          delete={this.deleteItem}
          sortName={this.sortByName}
          sortPriceA={this.sortedPriceA}
          sortPriceD={this.sortedPriceD}
          sortLocationA={this.sortByLocationAsc}
          sortLocationD={this.sortByLocationD}
          sortNameA={this.sortByNameAsc}
          sortNameD={this.sortByNameD}
        />
      </div>
    );
  }
}
