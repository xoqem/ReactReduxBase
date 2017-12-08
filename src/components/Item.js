import { bindActionCreators } from 'redux';
import colors from 'styles/colors';
import commonStyles from 'styles/common';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteItemAtIndex } from 'actions/items';

const styles = {
  root: {
    color: colors.darkText,
    background: {
      color: colors.lightBackground
    },
    border: {
      radius: '5px',
      style: 'none'
    },
    margin: {
      top: '1em'
    },
    padding: '1em',
    position: 'relative'
  },
  index: {
    font: {
      weight: 'bold'
    }
  },
  deleteButton: {
    ...commonStyles.secondaryButton,
    float: 'right',
    margin: {
      bottom: '0.5em',
      left: '0.5em'
    },
    padding: {
      bottom: '0.15em',
      left: '0.5em',
      right: '0.5em',
      top: '0.15em'
    }
  }
};

class Item extends React.Component {
  onClickDelete = () => {
    this.props.deleteItemAtIndex(this.props.index);
  };

  render() {
    const { classes, index, text } = this.props;

    return (
      <div className={classes.root}>
        <button className={classes.deleteButton} onClick={this.onClickDelete}>Delete</button>
        <div>
          <span className={classes.index}>{index + 1}. </span>{text}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItemAtIndex }, dispatch);
}

export default injectSheet(styles)(
  connect(null, mapDispatchToProps)(Item)
);
