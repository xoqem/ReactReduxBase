import { connect } from 'react-redux';
import { formatMessage } from 'FIXME';
import get from 'lodash/get';
import React from 'react';

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  };
}

function getMessage(key, values, locale, messages) {
  const localeMessages = get(messages, locale);
  const specificMessage = get(localeMessages, key);
  return formatMessage(specificMessage, values);
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
