import config from '../config';
import TokenService from './token-service';

const InventoryApiService={
  getInventory(inventoryId){
    return fetch(`${config.API_ENDPOINT}/inventory/${inventoryId}`,{
      headers:{
        "authorization":`bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res=>
      (!res.ok)
      ? res.json().then(e=>Promise.reject(e))
      :res.json()
      )

  },
}

module.exports=InventoryApiService