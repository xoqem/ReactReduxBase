import App from 'components/App';
import { createStore } from 'redux';
import defaultTheme from 'themes/default';
import { Provider } from 'react-redux';
import React from 'react';
import reducer from 'reducers';
import { ThemeProvider } from 'theming';

const store = createStore(reducer);

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Main;
