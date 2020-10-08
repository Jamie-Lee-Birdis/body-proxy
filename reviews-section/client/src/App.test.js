import React from 'react';
import { shallow, JestStyledComponents } from './enzyme.js';

import App from './component/App.jsx';

var window = {
  location: {
    search: '?id=1'
  }
};

it("renders without crashing", () => {
  shallow(<App />);
});

it("passes props", () => {
  const num = 100;
  const wrapper = shallow(<App count={num} score={'Mixed'} />);
  expect(wrapper.text().slice(0, 16)).toEqual('CUSTOMER REVIEWS');
});