import React from 'react'
import Product from '../Product/Product'
import './ProductList.scss'
import { products } from '../../constants'

const ProductList = (props:any) => {
    const {products} = props;
    return (
        <div className="wrapper">{
            products.map((name:any,i:any)=>{
                return(
                    <Product key={i} id={products[i].id} name={products[i].name} price={products[i].price}/>
                )

            })
        }
        </div>
    )
}

export default ProductList;
