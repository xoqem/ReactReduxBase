import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { deleteItemAtIndex } from 'actions/items';

class Items extends Component {
  render() {
    const { deleteItemAtIndex, items } = this.props;

    const itemComponents = items.map((item, index) => {
      const onDeleteClick = () => {
        deleteItemAtIndex(index);
      };

      return (
        <div key={index}>
          {index + 1}. {item}
          <button onClick={onDeleteClick}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <h2>Items</h2>
        {itemComponents}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItemAtIndex }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
