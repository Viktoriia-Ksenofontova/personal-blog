import palette from '../../assets/colors';

export const labelRule = (theme: 'dark' | 'light') => ({
  display: 'flex',
  fontSize: '16px',
  fontWeight: '500',
  width: '100%',
  marginBottom: '20px',
  textAlign: 'left',
  alignItems: 'top',
  color: palette[theme].text,
});

export const inputRule = (theme: 'dark' | 'light') => ({
  marginLeft: '20px',
  padding: '10px',
  border: 'none',
  borderRadius: '20px',
  boxShadow: `0px 0px 6px ${palette[theme].shadowColor}`,
  outline: 'none',
  width: '100%',
});
