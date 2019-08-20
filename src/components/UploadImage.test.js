import React from 'react';
import { shallow } from 'enzyme';
import UploadImage from './UploadImage';

describe('UploadImage component', () => {
  it('renders UploadImage', () => {
    const wrapper = shallow(<UploadImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
