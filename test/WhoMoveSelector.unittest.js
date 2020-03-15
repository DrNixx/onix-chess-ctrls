import React from 'react';
import { expect } from 'chai';  
import { shallow, mount, configure} from 'enzyme';
import { WhoMoveSelector } from '../dist/ctrls/WhoMoveSelector';
  
describe('<WhoMoveSelector/>', function () {
    it('should have an select element', function () {
        const wrapper = mount(<WhoMoveSelector/>);
        expect(wrapper.find('select')).to.have.length(1);
    });
  
    it('should have props for defaultValue', function () {
        const wrapper = shallow(<WhoMoveSelector/>);
        expect(wrapper.props().defaultValue).to.be.string;
        expect(wrapper.props().noProp).to.be.undefined;
    });
});