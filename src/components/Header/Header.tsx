import React, { useState, useRef, useEffect } from 'react'
import './Header.scss'
import Cart from '../Cart/Cart';


const Header =({cartItems, handleRemoveItem}:any) =>{
    const [isCartOpen, toggleCart] = useState(false);
    const handleClickCart = () => toggleCart(!isCartOpen);
    const cartRef:any = useRef();
    const iconRef:any = useRef();

    const handleClickOutside = (e:Event) => {
        if (!iconRef.current.contains(e.target) && !cartRef.current.contains(e.target)) {
            toggleCart(false)
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <div className="container">
            <img src='/assets/logo.png' className="logo" data-test-id="logo" alt="Logo"/>
            <div className="cart">
                <div ref={iconRef} onClick={handleClickCart}>
                    <div className="circle">{cartItems && cartItems.length}</div>
                    <img className="icon" data-test-id="icon" src='/assets/carticon.png' alt="Cart" />
                </div>
                <div ref={cartRef} className={isCartOpen?"cart-status open":"cart-status"}>
                    <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>
                </div>
            </div>

        </div>
    )
}


export default Header;
