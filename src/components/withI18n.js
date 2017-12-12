import { connect } from 'react-redux';
import { IntlMessageFormat } from 'FIXME';
import get from 'lodash/get';
import React from 'react';

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  };
}

function getMessage(key, values, locale, messages) {
  // TODO: handle falling back to AA if AA-bb is not available.
  // TODO: handle falling back to EN as last resort.
  const localeMessages = get(messages, locale);
  const specificMessage = get(localeMessages, key);
  var msg = new IntlMessageFormat(specificMessage, locale);
  return msg.format(values);
}

export default (WrappedComponent) => {
  const ComponentWithI18n = props => (
    <WrappedComponent
      {...props}
      getMessage={(key, values) => (
        getMessage(key, values, props.locale, props.message)
      )}
    />
  );

  return connect(mapStateToProps)(ComponentWithI18n);
};
