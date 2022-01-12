import palette from '../../assets/colors';

const linkRule = (theme) => ({
  display: 'block',
  width: '110px',
  marginLeft: 'auto',
  padding:'5px',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: palette[theme].text,
  border: `1px solid ${palette[theme].accent}`,
  borderRadius: '20px',
  transition: 'all 0.4s linear',
  ':hover': {
    color: palette[theme].accent
  },
  ':focus': {
    color: palette[theme].accent
  },
});

export default linkRule;