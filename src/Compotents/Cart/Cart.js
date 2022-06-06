import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
             <h4>Order Summary</h4>
              <h5>Items : {props.Cart} </h5>  
        </div>
    );
};

export default Cart;