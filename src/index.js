import App from 'components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import reducer from 'reducers';

const store = createStore(reducer);

const element = document.createElement('div');
document.body.appendChild(element);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
