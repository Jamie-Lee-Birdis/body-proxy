import React from 'react';
import { shallow, render, JestStyledComponents } from '../../enzyme.js';

import AwardImage from './AwardImage.jsx'

var window = {
  location: {
    search: '?id=1'
  }
};

it("renders without crashing", () => {
  shallow(<AwardImage award='Deep Thoughts' award='20' />);
});


it("is an image tag", () => {
  const wrapper = shallow(<AwardImage award='Deep Thoughts' award='20' />);
  const expectation = (`<img class="sc-bdnylx bzYYYw"/>`);
  expect(wrapper.text().slice(1, 4)).toBe('img');
  // expect(wrapper.html()).toBe('img');
});