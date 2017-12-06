import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteItemAtIndex } from 'actions/items';

class Item extends Component {
  _onClickDelete = () => {
    const { deleteItemAtIndex, index } = this.props;
    deleteItemAtIndex(index);
  };

  render() {
    const { index, text } = this.props;

    return (
      <div>
        {index + 1}. {text}
        <button onClick={this._onClickDelete}>Delete</button>
      </div>
    );
  }
};

Item.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItemAtIndex }, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);
