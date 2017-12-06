import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';

class AddItem extends Component {
  _onClickAdd = () => {
    console.log('_onClickAdd');
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this._onClickAdd}>Add</button>
      </div>
    );
  }
};

export default connect()(AddItem);