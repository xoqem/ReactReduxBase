import { addItem } from 'actions/items';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { setAddItemText } from 'actions/addItem';

class AddItem extends Component {
  _onClickAdd = () => {
    const { addItem, setAddItemText, text } = this.props;

    addItem(text);
    setAddItemText('');
  }

  _onInputChange = (event) => {
    this.props.setAddItemText(event.target.value);
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <h2>Add Item</h2>
        <input type="text" onChange={this._onInputChange} value={text} />
        <button onClick={this._onClickAdd}>Add</button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    text: state.addItem.text
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addItem,
    setAddItemText
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);