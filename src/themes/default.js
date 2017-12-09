const borderRadius = '5px';

const colors = {
  darkBackground: '#555555',
  darkText: '#333333',
  lightBackground: '#eeeeee',
  lightText: '#ffffff',
  mainBackground: '#ffffff',
  mainText: '#333333',
  primary: '#0061ff',
  primaryContrast: '#ffffff'
};

export default {

  borderRadius,
  colors,

  primaryButton: {
    background: {
      color: colors.primary
    },
    border: {
      radius: borderRadius,
      style: 'none'
    },
    color: colors.primaryContrast,
    padding: {
      bottom: '0.5em',
      left: '1em',
      right: '1em',
      top: '0.5em'
    }
  },

  secondaryButton: {
    background: {
      color: colors.primaryContrast
    },
    border: {
      color: colors.primary,
      radius: borderRadius,
      style: 'solid',
      width: '1px'
    },
    color: colors.primary,
    padding: {
      bottom: '0.5em',
      left: '1em',
      right: '1em',
      top: '0.5em'
    }
  },

  textInput: {
    border: {
      color: colors.mainText,
      radius: borderRadius,
      style: 'solid',
      width: '1px'
    },
    padding: '0.5em'
  }
};
