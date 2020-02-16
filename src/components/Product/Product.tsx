import React from 'react'

const Product=(props:any)=> {
    return (
        <div>
            <img src={`/images/${props.id}.jpg`} alt="productImage"/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Product;
