import React from 'react';

export default function RemoveButton(props) {
  return <button 


    onClick={() => props.removeFromCart(props.cartItem)}>
    Remove Item from Cart ({
      (props.cartItem && props.cartItem.quantity) || 0
    })
  </button>
}
