import colors from 'styles/colors';

export default {

  primaryButton: {
    background: {
      color: colors.primary
    },
    border: {
      radius: '5px',
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
      radius: '5px',
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
      radius: '5px',
      style: 'solid',
      width: '1px'
    },
    borderRadius: '5px',
    padding: '0.5em'
  }
};
