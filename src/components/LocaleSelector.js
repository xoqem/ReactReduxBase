import { setLocale } from 'actions/i18n';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import React from 'react';
import withI18n from 'components/withI18n';
import { withTheme } from 'theming';

const styles = theme => ({
  select: theme.textInput
});

class LocaleSelector extends React.PureComponent {
  onSelectChange = (event) => {
    this.props.setLocale(event.target.value);
  }

  render() {
    const {
      classes,
      getMessage,
      locale,
      locales
    } = this.props;

    const selectOptions = locales.map(value => (
      <option key={value} value={value}>{value}</option>
    ));

    return (
      <div>
        <h2>{getMessage('localeSelector.title')}</h2>
        <select
          className={classes.select}
          onChange={this.onSelectChange}
          value={locale}
        >
          {selectOptions}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    locales: state.i18n.locales
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setLocale
  }, dispatch);
}

export default withI18n(withTheme(
  injectSheet(styles)(
    connect(mapStateToProps, mapDispatchToProps)(LocaleSelector)
  )
));
