import React from 'react';
import { expect } from 'chai';  
import { shallow, mount, configure} from 'enzyme';
import { StartPosSelector } from '../dist/js/ctrls/StartPosSelector';
  
describe('<StartPosSelector/>', function () {
    it('should have an select element', function () {
        const wrapper = mount(<StartPosSelector/>);
        expect(wrapper.find('select')).to.have.length(1);
    });
  
    it('should have props for fen and openingsPos', function () {
        const wrapper = shallow(<StartPosSelector/>);
        expect(wrapper.props().fen).to.be.string;
        expect(wrapper.props().openingsPos).to.be.any;
        expect(wrapper.props().failProp).to.be.undefined;
    });
});