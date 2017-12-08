import AddItem from 'components/AddItem';
import injectSheet from 'react-jss';
import Items from 'components/Items';
import React from 'react';

const styles = {
  root: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
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
