import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import Item from 'components/Item';
import React from 'react';
import { withTheme } from 'theming';

const styles = theme => ({
  root: {
    color: theme.colors.primaryContainerText,
    background: {
      color: theme.colors.primaryContainerBackground
    },
    border: {
      radius: theme.borderRadius,
      style: 'none'
    },
    margin: {
      top: '1em'
    },
    padding: '1em'
  }
});

class Items extends React.Component {
  render() {
    const { classes, items } = this.props;

    const itemComponents = items.map((item, index) => (
      <Item index={index} key={index} text={item} />
    ));

    return (
      <div className={classes.root}>
        <h2>Items</h2>
        {itemComponents}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default withTheme(
  injectSheet(styles)(
    connect(mapStateToProps)(Items)
  )
);
