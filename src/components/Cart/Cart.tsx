import React from 'react';
import './Cart.scss'

const Cart = ({cartItems, handleRemoveItem}:any) => {
    const Items:any[] = cartItems;
    return (
      <div>
        {Items && Items.length === 0 && (
            <div data-test-id="emptycart">
                <img src='/assets/emptycart.png' className="empty-cart" alt="Empty Cart" />
            </div>
        )}
        {Items && Items.length>0 && (
        <div className="scroll" data-test-id="cartview">
          <p className="cart-p">{`You have ${cartItems.length} item in the cart`}</p>
          <div className="cart-label-row">
            <label className="cproduct-name">Product</label>
            <label className="cproduct-price">Price</label>
            <label className="cproduct-quantity">Qty</label>
            <label className="cproduct-total">Total</label>
            <label></label>
          </div>

            <div>
              {Items.map((item,i)=> (
                <div key={i} className="cart-product-row">
                  <div className="cproduct-name">{item.name}</div>
                  <div className="cproduct-price">$ {item.price}</div>
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

          <div className="grandtotal" data-test-id="grandtotal">
            <label>Grand Total</label>
            <div className="total">
              ${" "}
              {Number(Items.reduce((a, c) => a + c.price * c.count, 0)).toFixed(
                2
              )}
            </div>
          </div>

          <div className="checkoutbtn">
            <button>Proceed to Checkout</button>
          </div>
          
        </div>)}

      </div>
    );
}

export default Cart
