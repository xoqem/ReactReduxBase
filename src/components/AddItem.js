import { addItem } from 'actions/items';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import React from 'react';
import { setAddItemText } from 'actions/addItem';
import { withTheme } from 'theming';

const styles = theme => ({
  addButton: {
    ...theme.primaryButton,
    margin: {
      left: '1em'
    }
  },
  textInput: theme.textInput
});

class AddItem extends React.Component {
  onClickAdd = () => {
    this.props.addItem(this.props.text);
    this.props.setAddItemText('');
  }

  onInputChange = (event) => {
    this.props.setAddItemText(event.target.value);
  }

  render() {
    const { classes, text } = this.props;

    return (
      <div>
        <h2>Add Item</h2>
        <input className={classes.textInput} type="text" onChange={this.onInputChange} value={text} />
        <button className={classes.addButton} onClick={this.onClickAdd}>Add</button>
      </div>
    );
  }
}

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

export default withTheme(
  injectSheet(styles)(
    connect(mapStateToProps, mapDispatchToProps)(AddItem)
  )
);
