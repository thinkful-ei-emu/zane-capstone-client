import React from "react";
import CreateFormHeader from "./CreateFormComponent/CreateFormHeader";
import CreationForm from "./CreateFormComponent/CreationForm";
import InventoryApiService from "../services/inventory-api-service";
import { Redirect } from "react-router";

export default class CreateForm extends React.Component {
  state = { error: null, redirect: false };

  handleSubmit = e => {
    e.preventDefault();

    const {
      item_name,
      description,
      quantity,
      unit_type,
      price,
      location
    } = e.target;

    this.setState({ error: null, redirect: false });

    InventoryApiService.postItem(
      item_name.value,
      description.value,
      quantity.value,
      unit_type.value,
      price.value,
      location.value
    )

      .then(user => {
        item_name.value = "";
        description.value = "";
        quantity.value = "";
        unit_type.value = "";
        price.value = "";
        location.value = "";
        this.setState({
          redirect: true
        });
      })

      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/inventory" />;
    }
    return (
      <div>
        <CreateFormHeader />
        <CreationForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
