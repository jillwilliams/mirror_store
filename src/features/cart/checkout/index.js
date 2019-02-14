import React from 'react';
import { connect } from 'react-redux';
import Cart from '../../cart';

function sort(items) {
  return items.sort.itemNane.itemId (item.id < id);
}

function Cart(props) {
  return <table>
    <thread>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Image</th>
      </tr>
    </thread>
    <body>
      {
        sort(props.cart).map(item => <tr>
          <td>{ item.name }</td>
          <td>{ item.quantity }</td>
          <td> 
            <button onClick={() => props.addToCart(item)}>
              +
            </button>
          </td>
          <td> 
            <button onClick={() => props.removeFromCart(item)}>
              -
            </button>
          </td>
          <td>
            <button onClick={() => props.removeAllFromCart(item)}>
              Remove All Items from Cart
            </button>
          </td>
        </tr>)
      }
    </body>
  </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
//same arguements for connect every time, ie. stmt is constant