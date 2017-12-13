import en from 'i18n/en';
import es from 'i18n/es';

const defaultState = {
  locale: 'en',
  messages: {
    en,
    es
  },
  locales: ['en', 'es']
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOCALE': {
      return {
        ...state,
        locale: action.locale
      };
    }

    case 'SET_MESSAGES': {
      return {
        ...state,
        locales: action.messages.keys,
        messages: action.messages
      };
    }

    default: {
      return state;
    }
  }
};
