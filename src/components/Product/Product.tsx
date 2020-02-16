import React from 'react'
import './Product.scss'

const Product=(props:any)=> {
    return (
        <div className="product">
            <img src={`/images/${props.id}.jpg`} alt="productImage"/>
            <p className="product-name">{props.name}</p>
            <p className="product-price">{props.price}</p>
            <div className="add-cart-btn">
                <button onClick={()=>props.handleAddToCart(props)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;
