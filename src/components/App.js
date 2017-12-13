import AddItem from 'components/AddItem';
import injectSheet from 'react-jss';
import Items from 'components/Items';
import React from 'react';
import ThemeSelector from 'components/ThemeSelector';
import withI18n from 'components/withI18n';
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

const App = ({ classes, getMessage }) => (
  <div className={classes.root}>
    <h1>{getMessage('app.title')}</h1>
    <ThemeSelector />
    <AddItem />
    <Items />
  </div>
);

export default withI18n(withTheme(
  injectSheet(styles)(App)
));
