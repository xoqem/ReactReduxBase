export const generateTheme = ({ borderRadius, colors }) => ({

  borderRadius,
  colors,

  font: {
    family: 'Helvetica Neue, Helvetica, Arial, sans-serif'
  },

  primaryButton: {
    background: {
      color: colors.primary
    },
    border: {
      radius: borderRadius,
      style: 'none'
    },
    color: colors.primaryContrast,
    cursor: 'pointer',
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
    cursor: 'pointer',
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
});
