import React from 'react';
import './Cart.scss'

const Cart = ({cartItems}:any) => {
    const Items:any[] = cartItems;
    return (
        <div>
           <h4>Cart is empty</h4> 
           <div className="cart-column">
               <label>Product</label>
               <label>Price</label>
               <label>Qty</label>
               <label>Total</label>
           </div>
           {Items.length >0 &&
           <div>
               {Items.map(item => 
                   <div>
                       <div>{item.name}</div>
                       <div>{item.price}</div>
                       <div>{item.count}</div>
                   </div>
               )}
           </div>
           }
        </div>
    )
}

export default Cart
