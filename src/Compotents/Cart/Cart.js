import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart=props.cart;
    const total=cart.reduce((total , prd )=>total + prd.price , 0);
    return (
        <div>
             <h4>Order Summary</h4>
              <h5>Items : {cart.length} </h5> 
              <h5>Shipping :   $</h5> 
              <h5>Tax : $</h5>
              <h5>VAT : $</h5>
              <h2>Total :{total}$</h2>

        </div>
    );
};

export default Cart;