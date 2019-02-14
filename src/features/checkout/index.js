import React from 'react';
import { connect } from 'react-redux';
import Cart from'../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api';

function submitOrder(values, cart) {
  const { email, name } = values.order;

  fetchApi('post', "https://student-example-api_herokuapp.com/v1/orders.json", {
    order: {
      name, email, order_items_attrubutes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity,
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert('Something went wrong!')
      return
    }
    document.location.href = `/order/${json.id}`;
  })
}

function Checkout(props) {
  const { cart } = props;

  return <div>
    <div style='border' border='2px black solid'>
      <Cart />
    </div>
    <CheckoutForm onSubmit={(values, cart) => {
      submitOrder(values, cart)}
    } /> 
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(Checkout);
  