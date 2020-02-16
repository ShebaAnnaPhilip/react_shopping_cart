import React from 'react';
import './Cart.scss'

const Cart = () => {
    return (
        <div>
           <h4>Cart is empty</h4> 
           <div className="cart-column">
               <label>Product</label>
               <label>Price</label>
               <label>Qty</label>
               <label>Total</label>
           </div>
        </div>
    )
}

export default Cart
