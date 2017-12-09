import { generateTheme } from 'theming/utils';


const themeNames = ['default', 'alternate'];

const getThemeObject = (themeName) => {
  const themeValues = require(`theming/themes/${themeName}`);

  // FIXME: Figure out why I have to use .default after themeValues and
  // fix it if there is a better
  return generateTheme(themeValues.default);
};

const defaultState = {
  selectedThemeName: themeNames[0],
  themeNames,
  theme: getThemeObject(themeNames[0])
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_THEME_NAME': {
      const { themeName } = action;

      return {
        ...state,
        selectedThemeName: themeName,
        theme: getThemeObject(themeName)
      };
    }

    default: {
      return state;
    }
  }
};
