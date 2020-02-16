import React from 'react'
import Product from '../Product/Product'
import './ProductList.scss'
import {products} from '../../constants/index';

function ProductList() {
    return (
        <div className="wrapper">
            <Product name={products[0].name} price={products[0].price}/>
            <Product name={products[0].name} price={products[0].price}/>
            <Product name={products[0].name} price={products[0].price}/>
        </div>
    )
}

export default ProductList;
