import AddItem from 'components/AddItem';
import injectSheet from 'react-jss';
import Items from 'components/Items';
import React from 'react';
import { withTheme } from 'theming';

const styles = theme => ({
  '@global': {
    body: {
      background: {
        color: theme.colors.mainBackground
      },
      margin: 0,
      padding: 0
    },
    html: {
      margin: 0,
      padding: 0
    }
  },
  root: {
    color: theme.colors.mainText,
    font: theme.font,
    padding: '1em'
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
