import React from 'react';
import { expect } from 'chai';  
import { PgnView } from '../dist/ctrls/PgnView';
  
describe('<PgnView/>', function () {
    it('should have an textarea to display the pgn text', function () {
        const wrapper = shallow(<PgnView/>);
        expect(wrapper.find('textarea')).to.have.length(1);
    });
  
    it('should have props for pgn and readOnly', function () {
        const wrapper = shallow(<PgnView/>);
        expect(wrapper.props().pgn).to.be.any;
        expect(wrapper.props().readOnly).to.be.any;
    });
});