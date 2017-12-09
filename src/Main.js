import App from 'components/App';
import { connect } from 'react-redux';
import React from 'react';
import { ThemeProvider } from 'theming';

const Main = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

function mapStateToProps(state) {
  return {
    theme: state.theme.theme
  };
}

export default connect(mapStateToProps)(Main);
