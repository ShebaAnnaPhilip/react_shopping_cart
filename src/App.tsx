import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import {products} from './constants/index';
debugger
class App extends Component  {
  constructor(props:any){
    super(props);
  }

  state = {
    addedCartItems : []
  }

  handleAddToCart=(product:any)=>{
    const cartItems: any[] = this.state.addedCartItems;
    let productInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id){
        item.count ++;
        productInCart = true;
      }
    });

    if(!productInCart){
        cartItems.push({...product, count:1})
    }
    this.setState({addedCartItems : cartItems})

    console.log(cartItems);

  }

  render(){
    return(
      <div>
        <Header/>
        <ProductList products={products} handleAddToCart={this.handleAddToCart}/>
      </div>
    )

  }
};

export default App;
