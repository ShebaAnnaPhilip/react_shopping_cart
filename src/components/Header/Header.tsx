import React from 'react'
import './Header.scss'
import Cart from '../Cart/Cart';


const Header =() =>{
    return (
        <div className="container">
            <img src='/assets/logo.png' className="logo" alt="Logo" />
            <div className="cart">
                <a  href="#">
                    <img className="icon" src='/assets/carticon.png' alt="Cart" />
                </a>
                <div className="cart-status">
                    <Cart/>
                </div>
            </div>

        </div>
    )
}


export default Header;
