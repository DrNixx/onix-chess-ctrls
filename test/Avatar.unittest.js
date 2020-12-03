import React from 'react';
import { expect } from 'chai';  
import { Avatar } from '../dist/js/ui/Avatar';
  
describe('<Avatar/>', function () {
    it('should have an image to display the avatar', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.find('img')).to.have.length(1);
    });
  
    it('should have props for user and size', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.props().user).to.be.any;
        expect(wrapper.props().size).to.be.any;
    });
});