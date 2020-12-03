import React from 'react';
import { expect } from 'chai';  
import { UserName } from '../dist/ui/UserName';
  
describe('<UserName/>', function () {
    it('should have an Avatar to display the UserName', function () {
        const wrapper = shallow(<UserName/>);
        expect(wrapper.find('Avatar')).to.have.length(1);
    });
  
    it('should have props for user and size', function () {
        const wrapper = shallow(<UserName/>);
        expect(wrapper.props().user).to.be.any;
        expect(wrapper.props().size).to.be.any;
    });
});