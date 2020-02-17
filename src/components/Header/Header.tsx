import React, { useState, useRef, useEffect } from 'react'
import './Header.scss'
import Cart from '../Cart/Cart';


const Header =({cartItems, handleRemoveItem}:any) =>{
    const [isCartOpen, toggleCart] = useState(false);
    const handleClickCart = () => toggleCart(!isCartOpen);
    const myRef:any = useRef();
    const iconRef:any = useRef();

    const handleClickOutside = (e:Event) => {
        if (!iconRef.current.contains(e.target) && !myRef.current.contains(e.target)) {
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
                <div ref={iconRef}>
                    <div className="circle">{cartItems.length}</div>
                    <img className="icon" data-test-id="icon" src='/assets/carticon.png' alt="Cart"  onClick={handleClickCart}/>
                </div>
                <div ref={myRef} className={isCartOpen?"cart-status open":"cart-status"}>
                    <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>
                </div>
            </div>

        </div>
    )
}


export default Header;
