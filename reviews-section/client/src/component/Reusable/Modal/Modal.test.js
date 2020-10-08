import React from 'react';
import { shallow, JestStyledComponents } from '../../../enzyme.js';

import Modal from './Modal.jsx';

var window = {
  location: {
    search: '?id=1'
  }
};

it("renders without crashing", () => {
  shallow(<Modal />);
});