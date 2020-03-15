import React from 'react';
import { expect } from 'chai';  
import { shallow, mount, configure} from 'enzyme';
import { PieceSelector } from '../dist/ctrls/PieceSelector';
  
describe('<PieceSelector/>', function () {
    it('should have an select element', function () {
        const wrapper = mount(<PieceSelector/>);
        expect(wrapper.find('select')).to.have.length(1);
    });
  
    it('should have props for defaultValue', function () {
        const wrapper = shallow(<PieceSelector/>);
        expect(wrapper.props().defaultValue).to.be.string;
        expect(wrapper.props().noProp).to.be.undefined;
    });
});