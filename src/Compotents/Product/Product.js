import React from 'react'
import './Product.css'


const Product = (props) => {
    console.log(props.product.name);
    const {img,name,seller,price,stock,shipping}=props.product;
  return (
    <div className='products'>

        <div> 
            <img src={img} alt="" />
        </div>

        <div className='product-name'>
        <h5 id='name'>{name}</h5><br />
        <p>by:{seller}</p> <p>Price : ${price}</p>
        <p>Shipping : $/{shipping}</p>
        <p>Only {stock} left . Order Now</p>      
        </div>      
    </div>
  )
}

export default Product