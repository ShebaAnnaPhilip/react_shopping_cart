import React from 'react';
import './Cart.scss'

const Cart = ({cartItems}:any) => {
    const Items:any[] = cartItems;
    return (
        <div>
           <h4>Cart is empty</h4> 
           <div className="cart-label-row">
               <label className="cproduct-name">Product</label>
               <label className="cproduct-price">Price</label>
               <label className="cproduct-quantity">Qty</label>
               <label className="cproduct-total">Total</label>
               <label></label>
           </div>
           {Items.length >0 &&
           <div>
               {Items.map(item => 
                   <div className="cart-product-row">
                       <div className="cproduct-name">{item.name}</div>
                       <div className="cproduct-price">{item.price}</div>
                       <div className="cproduct-quantity">{item.count}</div>
                       <div className="cproduct-total">{item.price *item.count}</div>
                       <div><a href="#">x</a></div>
                   </div>
               )}
           </div>
           }
        </div>
    )
}

export default Cart
