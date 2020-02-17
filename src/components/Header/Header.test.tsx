import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Cart from '../Cart/Cart';


describe ('Header Component',() => {
    let wrapper: any;
    const handleAddToCart =jest.fn;
    const handleRemoveItem =jest.fn
    const cartItems = {
        id: "1", name: "Plumpy Nut", price: 25.76, count: 3, handleAddToCart: handleAddToCart
    }
    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    it('renders without crashing', () => {
        shallow(<Header cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>)
      });

    it("should render the logo properly", () => {
        expect(wrapper.find(`[data-test-id='logo']`).length).toBe(1);
    });

    it("should render the icon properly", () => {
        expect(wrapper.find(`[data-test-id='icon']`).length).toBe(1);
    });

    it('renders the Cart component', () => {
        expect(wrapper.find(Cart)).toHaveLength(1);
      });
});