import palette from '../../assets/colors';

const latestPostStyle = (theme) => ({
    width: 'calc(50% - 5px)',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '20px',
    boxShadow: `0px 6px 26px ${palette[theme].shadowColor}`,
    ':nth-child(2n+1)': {
      marginRight: '10px'
    }
})

export default latestPostStyle;