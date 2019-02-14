import React from 'react';
import { connect } from 'react-redux';
import fetchApi from '../modules/fetch-api';

class ProductListing extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props
    fetchAPI('get', "https://student-example-api.herokuapp.com/v1/products.json")  
      .then((json) => {
        loadProduct(json)
      })
  }
}

  render() ;
    const { addToCart, removeFromCart, products, cart } = this.props;
    
    return <div className="product-listing">
      { 
        this.props.products.map(product => 
          <ProductListItem 
            products={product} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            cartItem= {cart.filter(cartItem => cartItem.id === product.id)[0]}
          />)
      }
    </div>;


// The function above passes in ALL of the cart's values to the 'ProductListing component'
function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (products) => {
      dispatch({ type: 'LOAD', payload: products })
    }, 
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);