import React from 'react'
import './Product.scss'

const Product=(props:any)=> {
    const {id, name, price, handleAddToCart} = props;
    return (
        <div className="product">
            <div className="product-image">
                <img data-test-id="productimage" src={`/images/${id}.jpg`} alt="productImage"/>
            </div>
            <p className="product-name">{name}</p>
            <p className="product-price">{price}</p>
            <div className="add-cart-btn">
                <button data-test-id= "button" onClick={()=>handleAddToCart(props)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;
