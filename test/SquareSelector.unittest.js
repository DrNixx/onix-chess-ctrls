import React from 'react';
import { expect } from 'chai';  
import { shallow, mount, configure} from 'enzyme';
import { SquareSelector } from '../dist/js/ctrls/SquareSelector';
  
describe('<SquareSelector/>', function () {
    it('should have an select element', function () {
        const wrapper = mount(<SquareSelector/>);
        expect(wrapper.find('select')).to.have.length(1);
    });
  
    it('should have props for defaultValue', function () {
        const wrapper = shallow(<SquareSelector/>);
        expect(wrapper.props().defaultValue).to.be.string;
        expect(wrapper.props().noProp).to.be.undefined;
    });
});