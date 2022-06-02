import React, { useState } from 'react'
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product'
const Shop = () => {
    
const first10 = fakeData.slice(0,12);
console.log(fakeData.slice(0,12));

const [products,setproducts]=useState(first10);

    
  return (
    <div className='shop-container'> 

      <div className="product-container">
         {products.map(product=> <Product>{ product.name}</Product>)}  
      </div>


      <div className="shop-cart">
        <h3> this is shop crat.</h3>
     </div>
     
     </div>
  )
}

export default Shop;