import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart=props.cart;
    const total=cart.reduce((total , prd )=>total + prd.price , 0);

    let shipping=0;

    if( total>0 &&  total<15){
        shipping=4.99;
    }

    else if(shipping<25 && shipping >15){
        shipping=10.99;
    }
    else if(total>35){
        shipping=0;
    }

    let VAT=(total/20);
    let Tax=(total*0.25);

   let grandPrice= (total+shipping+VAT+Tax);

   const fn = num =>{
      const newNum=num.toFixed(2);
      return Number(newNum);
   }

    return (
        <div>
             <h4>Order Summary</h4>
              <h5>Items : {cart.length} </h5> 
              <h5>Shipping : {shipping}$</h5> 
              <h5>Tax : {fn(Tax)}$</h5>
              <h5>VAT : {fn(VAT)}$</h5>
              <h2>Total :{fn(grandPrice)}$</h2>

        </div>
    );
};

export default Cart;