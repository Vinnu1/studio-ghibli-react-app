import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Whole App render perfect', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

