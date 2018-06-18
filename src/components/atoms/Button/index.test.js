import React from 'react'

import { shallow } from 'enzyme'
import Button from '.'

const name = "ADD";

it('renders without crashing', () => {
  const wrapper = shallow(<Button name={name} />);
  expect(wrapper.contains('ADD')).toBe(true)

});
