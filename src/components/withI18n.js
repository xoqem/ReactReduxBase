import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import get from 'lodash/get';
import React from 'react';

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  };
}

function getMessage(key, values, locale, messages) {
  const messageString = getMessageForLocale(key, locale, messages);
  const formatter = new IntlMessageFormat(messageString, locale);
  return formatter.format(values);
}

function getMessageForLocale(key, locale, messages) {
  const lowerCaseLocale = ('' || locale).toLowerCase();

  // first attempt to find message for entire locale (e.g. pt-br), next try
  // just the language code (e.g. pt), finally fall back to english (e.g. en)
  return get(messages, [lowerCaseLocale, key]) ||
    get(messages, [lowerCaseLocale.slice(0, 2), key]) ||
    get(messages, ['en', key]);
}

export default (WrappedComponent) => {
  const ComponentWithI18n = props => (
    <WrappedComponent
      {...props}
      getMessage={(key, values) => (
        getMessage(key, values, props.locale, props.messages)
      )}
    />
  );

  return connect(mapStateToProps)(ComponentWithI18n);
};
