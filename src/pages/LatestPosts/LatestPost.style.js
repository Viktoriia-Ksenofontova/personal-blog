import palette from '../../assets/colors';

const latestPostStyle = (theme) => ({
    width: 'calc(50% - 5px)',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '20px',
    boxShadow: `0px 6px 26px ${palette[theme].shadowColor}`,

    '@media (min-width: 768px)':{
      ':nth-child(2n+1)': {
        marginRight: '10px'
      }
    },
   
    '@media (max-width: 767px)':{
      width: '100%'
    }
})

export default latestPostStyle;