import palette from '../../assets/colors';

export const postStyle=()=>({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkitLineClamp': '3',
  '-webkitBoxOrient': 'vertical',
  height:'72px',
})

export const linkRuleStyle = (theme) => ({
  width: '110px',
  alignSelf:'end',
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

