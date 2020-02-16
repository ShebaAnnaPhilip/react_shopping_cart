import React from 'react';
import './Cart.scss'

const Cart = ({cartItems, handleRemoveItem}:any) => {
    const Items:any[] = cartItems;
    return (
      <div>
        <div>Cart is empty</div>
        <div>
          <div className="cart-label-row">
            <label className="cproduct-name">Product</label>
            <label className="cproduct-price">Price</label>
            <label className="cproduct-quantity">Qty</label>
            <label className="cproduct-total">Total</label>
            <label></label>
          </div>

          {Items.length > 0 && (
            <div>
              {Items.map(item => (
                <div className="cart-product-row">
                  <div className="cproduct-name">{item.name}</div>
                  <div className="cproduct-price">{item.price}</div>
                  <div className="cproduct-quantity">{item.count}</div>
                  <div className="cproduct-total">
                    $ {Number(item.price * item.count).toFixed(2)}
                  </div>
                  <div
                    className="cproduct-remove"
                    onClick={() => handleRemoveItem(item)}
                  >
                    x
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grandtotal">
            <label>Grand Total</label>
            <div className="total">
              ${" "}
              {Number(Items.reduce((a, c) => a + c.price * c.count, 0)).toFixed(
                2
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cart
