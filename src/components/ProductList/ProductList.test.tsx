import { shallow } from 'enzyme';
import React from 'react';
import ProductList from './ProductList';
import {products} from '../../constants/index';
import Product from '../Product/Product';

describe('ProductList', () => {
  let wrapper:any;
  const handleAddToCart = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<ProductList
        products={products} handleAddToCart={handleAddToCart}/>);
  });


  it ('renders Four <Product /> component', () => {
    console.log(wrapper.find(Product));
    expect(wrapper.find(Product)).toHaveLength(9);
  });

});