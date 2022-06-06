import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock, shipping } = props.product;
  return (
    <div className="products">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="product-name">
        <h5 id="name">{name}</h5>
        <br />
        <p>by:{seller}</p> <p>Price : ${price}</p>
        <p>Shipping : $/{shipping}</p>
        <p>Only {stock} left . Order Now</p>
        <button className="cart-btn" onClick={props.handleAddProduct}> <FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
