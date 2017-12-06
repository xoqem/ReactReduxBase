import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { setAddItemText } from 'actions/addItem';

class AddItem extends Component {
  _onClickAdd = () => {
    console.log('TODO: _onClickAdd');
  }

  _onInputChange = (event) => {
    this.props.setAddItemText(event.target.value);
  }

  render() {
    const { text } = this.props;

    return (
      <div>
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
  return bindActionCreators({ setAddItemText }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
