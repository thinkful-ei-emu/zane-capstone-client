import config from "../config";
import TokenService from "./token-service";

const InventoryApiService = {
  getInventory() {
    return fetch(`${config.API_ENDPOINT}/inventory/`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postItem(item_name, description, quantity, unit_type, price, location) {
    return fetch(`${config.API_ENDPOINT}/inventory/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        item_name,
        description,
        quantity,
        unit_type,
        price,
        location
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // deleteItem(id){
  //   return fetch(`${config.API_ENDPOINT}/inventory/1`,{
  //     method:'DELETE',
  //     headers:{
  //       'content-type':'application/json',
  //       'Authorization':`bearer ${TokenService.getAuthToken()}`

  //     },
  //     body:JSON.stringify({id})
  //   })
  //   .then(res=> console.log(res))

  // },
  updateItem(id, item_name, description, quantity, unit_type, price, location) {
    return fetch(`${config.API_ENDPOINT}/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id,
        item_name,
        description,
        quantity,
        unit_type,
        price,
        location
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getItem(itemId) {
    return fetch(`${config.API_ENDPOINT}/inventory/${itemId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default InventoryApiService;
