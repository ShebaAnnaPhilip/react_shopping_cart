import React from 'react';
import {shallow} from "enzyme";
import Product from './Product'
import { fireEvent } from '@testing-library/react';

describe('Product component', ()=>{
    let wrapper: any;
    const handleAddToCart = jest.fn()
	beforeEach(() => {
        wrapper = shallow(<Product id="101" name="Product name" price=" $5.50 " handleAddToCart={handleAddToCart}/>)
        
    });

    it('should render the product image',()=>{
        expect(wrapper.find(`[data-test-id='productimage']`).length).toBe(1);
    });

    it('renders name, price & add to button correctly', ()=> {

        expect(wrapper.props().name).toBeDefined;
        expect(wrapper.props().price).toBeDefined;
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.text()).toEqual('Product name $5.50 Add to Cart');
    });

    it("should call the Add to Cart handler properly", () => {

        wrapper.find(`[data-test-id='button']`).simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1)
    });
  
})