import { connect } from 'react-redux';
import React from 'react';
import { formatMessage } from 'FIXME';

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  };
}

function getMessage(key, locale, messages) {
  const localeMessages = messages && messages[locale];
  const formattedMessage =
    localeMessages &&
    localeMessages[key] &&
    formatMessage(localeMessages[key], locale);
  return formattedMessage || '';
}

export default (WrappedComponent) => {
  const ComponentWithI18n = props => (
    <WrappedComponent
      {...props}
      getMessage={key => (
        getMessage(key, props.locale, props.message)
      )}
    />
  );

  return connect(mapStateToProps)(ComponentWithI18n);
};
