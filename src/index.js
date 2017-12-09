import { createStore } from 'redux';
import Main from 'Main';
import { Provider } from 'react-redux';
import React from 'react';
import reducer from 'reducers';
import { render } from 'react-dom';

const store = createStore(reducer);

const element = document.createElement('div');
document.body.appendChild(element);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  element
);
