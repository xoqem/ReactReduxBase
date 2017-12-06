import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom';

const element = document.createElement('div');
document.body.appendChild(element);

ReactDOM.render(
  <App />,
  element
);
