import React, { useState } from 'react'
import fakeData from '../../fakeData'
const Shop = () => {
    
const first10 = fakeData.slice(0,12);
console.log(fakeData.slice(0,12));

const [products,setproducts]=useState(first10);

    
  return (
    <div className=' ' > 

      <div className="product-container">
      <h3>{products.length}</h3>
     
     <ul>
         {products.map(product=> <li>{ product.name}</li>)}
     </ul>
      </div>


      <div className="shop-cart">
        <h3> this is shop crat.</h3>
     </div>
     
     </div>
  )
}

export default Shop;