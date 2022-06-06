import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart"
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  console.log(fakeData.slice(0, 10));

  const [products, setproducts] = useState(first10);

  const  handleAddProduct=()=>{
                      console.log('product added');    
  }


  return (
    <div className="shop-container">
      {/* for product */}

      <div className="product-container">
        {products.map(pd => (<Product 
                                handleAddProduct={handleAddProduct}
                               product={pd}>
                                           </Product>))}
      </div>

      {/* for cart */}

      <div className="cart-container">
          <Cart>

          </Cart>
      </div>

          {/* Cart end*/}

    </div>
  );
};

export default Shop;
