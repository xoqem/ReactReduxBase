import AddItem from 'components/AddItem';
import colors from 'styles/colors';
import injectSheet from 'react-jss';
import Items from 'components/Items';
import React from 'react';

const styles = {
  root: {
    background: {
      color: colors.mainBackground
    },
    color: colors.mainText,
    font: {
      family: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
  }
};

const App = ({ classes }) => (
  <div className={classes.root}>
    <h1>React Redux Base</h1>
    <AddItem />
    <Items />
  </div>
);

export default injectSheet(styles)(App);
