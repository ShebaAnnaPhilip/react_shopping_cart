import React, { useState } from 'react'
import './Header.scss'
import Cart from '../Cart/Cart';


const Header =({cartItems, handleRemoveItem}:any) =>{
    const [isCartOpen, toggleCart] = useState(false);
    const handleClickCart = () => toggleCart(!isCartOpen);
    return (
        <div className="container">
            <img src='/assets/logo.png' className="logo" alt="Logo" />
            <div className="cart">
                <a  href="#">
                    <img className="icon" src='/assets/carticon.png' alt="Cart" onClick={handleClickCart}/>
                </a>
                <div className={isCartOpen?"cart-status open":"cart-status"}>
                    <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>
                </div>
            </div>

        </div>
    )
}


export default Header;
