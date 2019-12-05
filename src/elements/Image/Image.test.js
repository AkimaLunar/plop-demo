import React from 'react'
import ReactDOM from 'react-dom';
import Image from 'Image.js'

/**
 * Image Test
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});