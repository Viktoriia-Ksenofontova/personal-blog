const viewTheme = {
  container: {
    display: 'block',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    maxWidth: '1440px',
  },

  header: {
    maxWidth: '1440px',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
  },

  footer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '1440px',
    display: 'block',
    textAlign: 'center',
  },

  content: {
    display: 'flex',
  },
};

export const makeViewStyle = (styleProps, variant) => {
  const variantStyle = viewTheme[variant];

  return {
    ...variantStyle,
    ...styleProps,
  };
};
