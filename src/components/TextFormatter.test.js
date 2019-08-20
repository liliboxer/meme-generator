import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('TextFormatter component', () => {
  it('renders TextFormatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
