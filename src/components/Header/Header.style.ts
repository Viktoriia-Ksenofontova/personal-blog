import palette from '../../assets/colors';

export const navbarLinkRule = () => ({
  marginRight: '20px',
  textDecoration: 'none',
  fontSize: '22px',
  fontWeight: 'bold',
  color: palette.light.text,
  transition: 'all 0.4s linear',
  ':hover': {
    color: palette.light.accent,
  },
  ':focus': {
    color: palette.light.accent,
  },
  '&.active': {
    color: palette.light.accent,
    textDecoration: 'underline',
  },
  '@media (max-width: 767px)': {
    marginRight: '0',
    marginBottom: '20px',
  },
});

export const headerStyles = () => ({
  width: '100%',
  backgroundColor: palette.light.header,
  transition: 'all 200ms linear',
});

export const navStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 767px)': {
    flexWrap: 'wrap',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    width: '150px',
  },
});

export const navWrapperStyles = (theme: 'dark' | 'light') => ({
  '@media (max-width: 767px)': {
    position: 'absolute',
    width: '320px',
    padding: '20px',
    transition: 'all 0.4s linear',
    backgroundColor: palette[theme].menuWrapper,
    right: '0',
    top: '100%',
    transform: 'translateX(0)',
  },
});

export const closeNavWrapperStyles = () => ({
  '@media (max-width: 767px)': {
    position: 'absolute',
    right: '0',
    top: '100%',
    transition: 'all 0.4s linear',
    transform: 'translateX(100%)',
  },

  '@media (min-width: 768px)': {
    display: 'flex',
  },
});

export const buttonMenuStyles = () => ({
  width: '50px',
  height: '50px',
  padding: '3px',
  textAlign: 'center',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  borderRadius: '50%',
  ':hover': {
    backgroundColor: palette.light.accent,
  },
  ':focus': {
    backgroundColor: palette.light.accent,
  },
});

export const logoStyles = () => ({
  color: `${palette.light.accent}`,
  marginBottom: '0',
});
