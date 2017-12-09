import AddItem from 'components/AddItem';
import injectSheet from 'react-jss';
import Items from 'components/Items';
import React from 'react';
import { withTheme } from 'theming';

const styles = theme => ({
  root: {
    background: {
      color: theme.colors.mainBackground
    },
    color: theme.colors.mainText,
    font: {
      family: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
  }
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <h1>React Redux Base</h1>
    <AddItem />
    <Items />
  </div>
);

export default withTheme(
  injectSheet(styles)(App)
);
