import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteItemAtIndex } from 'actions/items';

class Item extends React.Component {
  onClickDelete = () => {
    this.props.deleteItemAtIndex(this.props.index);
  };

  render() {
    const { index, text } = this.props;

    return (
      <div>
        {index + 1}. {text}
        <button onClick={this.onClickDelete}>Delete</button>
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

export default connect(null, mapDispatchToProps)(Item);
