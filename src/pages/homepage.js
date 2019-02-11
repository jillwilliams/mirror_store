import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/product.json';

export default function Homepage(props) {
  return <div>
    <h2>Homepage</h2>
    <ProductListing products={data.products} />
  </div>
}