import en from 'i18n/en';

const defaultState = {
  locale: 'en',
  messages: {
    en
  },
  locales: ['en']
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
