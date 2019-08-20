import React from 'react';
import { shallow } from 'enzyme';
import MemeInput from './MemeInput';

describe('MemeInput component', () => {
  it('renders MemeInput', () => {
    const wrapper = shallow(<MemeInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
