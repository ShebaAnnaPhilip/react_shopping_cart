import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

class App extends Component  {
  constructor(props:any){
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
        <ProductList/>
      </div>
    )

  }
};

export default App;
