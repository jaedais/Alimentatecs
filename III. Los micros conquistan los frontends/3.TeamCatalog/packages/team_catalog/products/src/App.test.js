import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < Products / > , div);
  ReactDOM.unmountComponentAtNode(div);
});