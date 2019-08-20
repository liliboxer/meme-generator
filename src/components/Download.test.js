import React from 'react';
import { shallow } from 'enzyme';
import Download from './Download';

describe('Download component', () => {
  it('renders Download', () => {
    const wrapper = shallow(<Download />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
