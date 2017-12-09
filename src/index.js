import Main from 'Main';
import React from 'react';
import { render } from 'react-dom';

const element = document.createElement('div');
document.body.appendChild(element);

render(
  <Main />,
  element
);
