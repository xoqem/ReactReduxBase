import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteItemAtIndex } from 'actions/items';

const styles = {
  root: {
    backgroundColor: '#eeeeee',
    border: '1px solid #777777',
    borderRadius: '5px',
    marginTop: '1em',
    padding: '1em',
    position: 'relative'
  },
  index: {
    fontWeight: 'bold',
  },
  deleteButton: {
    border: '1px solid #777777',
    borderRadius: '5px',
    float: 'right',
    marginBottom: '0.5em',
    marginLeft: '0.5em',
    padding: '0.15em 0.5em'
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
