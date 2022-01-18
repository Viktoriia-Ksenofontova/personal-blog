import palette from '../../assets/colors';

export const listStyle=()=>({
  display: 'flex', 
  flexWrap: 'wrap',
  gap: '20px'
})

export const postStyle = (theme) => ({
    display: 'flex', 
    flexWrap: 'wrap',
    gap:'10px',
    
    padding: '20px',
    borderRadius: '20px',
    boxShadow: `0px 6px 26px ${palette[theme].shadowColor}`,

    '@media (min-width: 768px)':{
      flex: '1 1  calc((100%/2) - 10px)'
    },
   
    '@media (max-width: 767px)':{
      flex: '1 100%',
    }
})

