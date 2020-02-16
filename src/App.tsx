import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';

class App extends Component  {
  constructor(props:any){
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
      </div>
    )

  }
};

export default App;
