import { setThemeName } from 'actions/theme';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import React from 'react';
import { withTheme } from 'theming';

const styles = theme => ({
  select: theme.textInput
});

class ThemeSelector extends React.Component {
  onSelectChange = (event) => {
    this.props.setThemeName(event.target.value);
  }

  render() {
    const { classes, selectedThemeName, themeNames } = this.props;

    const selectOptions = themeNames.map(themeName => (
      <option key={themeName} value={themeName}>{themeName}</option>
    ));

    return (
      <div>
        <h2>Theme Selector</h2>
        <select
          className={classes.select}
          onChange={this.onSelectChange}
          value={selectedThemeName}
        >
          {selectOptions}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedThemeName: state.theme.selectedThemeName,
    themeNames: state.theme.themeNames
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setThemeName
  }, dispatch);
}

export default withTheme(
  injectSheet(styles)(
    connect(mapStateToProps, mapDispatchToProps)(ThemeSelector)
  )
);
