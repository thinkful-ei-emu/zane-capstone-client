import React from 'react'
import CreateFormHeader from './CreateFormComponent/CreateFormHeader'
import UpdateForm from './UpdateComponents/UpdateForm';
import InventoryApiService from '../services/inventory-api-service';
import Item from './UpdateComponents/Item';
import {Redirect} from 'react-router'

export default class UpdatePage extends React.Component{
  static defaultProps = {
    match: { params: {} },
  } 
  state = { error: null, redirect: false, item:[] };

  handleSubmit = e => {
    e.preventDefault();
    console.log('im running')

    const { item_name, description, quantity, unit_type, price } = e.target;
    const { match: { params } } = this.props;
    
    this.setState({ error: null, redirect: false });
    console.log(item_name.value)

    InventoryApiService.updateItem(
      params.itemid,
      item_name.value,
      description.value,
      quantity.value,
      unit_type.value,
      price.value
    )

      .then(user => {
        item_name.value = "";
        description.value = "";
        quantity.value = "";
        unit_type.value = "";
        price.value = "";
        this.setState({
          redirect: true
        })
      })

      .catch(res => {
        this.setState({ error: res.error });
      });
  };
 
  componentDidMount(){
    const { match: { params } } = this.props;
    
    InventoryApiService.getItem(params.itemid)
    .then(res=> this.setState({item:res}))

  }

  componentWillUnmount(){

  }

  
  
  
  render(){
const {item ,redirect}=this.state

    if(redirect===true){
      return <Redirect to='/inventory'/>}
    return(
      <div>
        
      <CreateFormHeader/>
      <Item item_name={item.item_name} description={item.description} quantity={item.quantity} unit_type={item.unit_type} price={item.price}/>
      <UpdateForm handleSubmit={this.handleSubmit} item_name={item.item_name} description={item.description} quantity={item.quantity} unit_type={item.unit_type} price={item.price}/>


      </div>
    )
  }
}