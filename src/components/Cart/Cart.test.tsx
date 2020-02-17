import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

describe('Cart component', () => {
    const handleAddToCart =jest.fn;
    const handleRemoveItem =jest.fn
    const cartItems = {
        id: "1", name: "Plumpy Nut", price: 25.76, count: 3, handleAddToCart: handleAddToCart
    }
    
    it('render without crashing', () =>{
        shallow(<Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>)
    })

    it('should show empty cart image when no items added to cart', () => {
        let items:any= [];
        const emptycart = shallow(<Cart cartItems={items}/>).find(`[data-test-id='emptycart']`);
        expect(emptycart).toHaveLength(1);

    })

    it('should show added product, price,total etc when items are added to cart', () => {

        const cartItems = [{
            id: "1", name: "Plumpy Nut", price: 25.76, count: 3, handleAddToCart: handleAddToCart
        }]
        const cartview = shallow(<Cart cartItems={cartItems}/>).find(`[data-test-id='cartview']`);
        expect(cartview).toHaveLength(1);
        
    })

    it('should show the grand total', () => {
        const cartItems = [{
            id: "1", name: "Plumpy Nut", price: 25.76, count: 3, handleAddToCart: handleAddToCart
        }]
        const grandtotal = shallow(<Cart cartItems={cartItems}/>).find(`[data-test-id='grandtotal']`);
        expect(grandtotal).toHaveLength(1);
    })


});