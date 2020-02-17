import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import {products} from './constants/index';

describe ('App',() => {
  let wrapper:any;

  beforeEach(() => {
    wrapper = shallow(<App/>)
    wrapper.setState({ cartItems: []});

  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Header compoent', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders ProductList compoent', () => {
    expect(wrapper.find(ProductList)).toHaveLength(1);
  });

  it ('should add products to cart', () => {
    
    const itemToAdd:any = products[0];
    let cartItems:any
    let productAlreadyInCart = false;
    if(!productAlreadyInCart){
          cartItems = wrapper.state().cartItems.concat(itemToAdd);
        }
    wrapper.setState({ cartItems});
    expect(wrapper.state().cartItems).toHaveLength(1);
    
  })

  it ('should remove products from cart', () => {

    const id = '1';
    const cartItems:any[] = products;
    let filteredCart = cartItems.filter(cartitem => cartitem.id !== id)
    wrapper.setState({cartItems : filteredCart});
    expect(wrapper.state().cartItems).toHaveLength(8);

  })

})



