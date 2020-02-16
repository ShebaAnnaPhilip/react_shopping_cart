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
    CartItems : []
  }

  handleAddToCart=(product:any)=>{
    const cartItems: any[] = this.state.CartItems;
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
    this.setState({CartItems : cartItems});
  }

  handleRemoveItem = (item:any) => {
    const cartItems:any[] = this.state.CartItems;
    let filteredCart = cartItems.filter(cartitem => cartitem.id !== item.id)
    this.setState({CartItems : filteredCart});
  }

  render(){
    return(
      <div className="main">
        <Header cartItems={this.state.CartItems} handleRemoveItem={this.handleRemoveItem} />
        <ProductList products={products} handleAddToCart={this.handleAddToCart}/>
      </div>
    )

  }
};

export default App;
