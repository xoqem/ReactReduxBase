import { addItem } from 'actions/items';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import React from 'react';
import { setAddItemText } from 'actions/addItem';
import withI18n from 'components/withI18n';
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

class AddItem extends React.PureComponent {
  onClickAdd = () => {
    this.props.addItem(this.props.text);
    this.props.setAddItemText('');
  }

  onInputChange = (event) => {
    this.props.setAddItemText(event.target.value);
  }

  onInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onClickAdd();
    }
  }

  render() {
    const { classes, getMessage, text } = this.props;

    return (
      <div>
        <h2>{getMessage('addItem.title')}</h2>
        <input
          className={classes.textInput}
          onChange={this.onInputChange}
          onKeyPress={this.onInputKeyPress}
          type="text"
          value={text}
        />
        <button className={classes.addButton} onClick={this.onClickAdd}>
          {getMessage('addItem.addButton')}
        </button>
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

export default withI18n(withTheme(
  injectSheet(styles)(
    connect(mapStateToProps, mapDispatchToProps)(AddItem)
  )
));
