import React from 'react';
import { shallow } from 'enzyme';
import MemeDisplay from './MemeDisplay';

describe('MemeDisplay component', () => {
  it('renders MemeDisplay', () => {
    const wrapper = shallow(<MemeDisplay/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
