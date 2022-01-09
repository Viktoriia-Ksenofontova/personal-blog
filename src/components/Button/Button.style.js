import palette from '../../assets/colors';

const style = ({ theme }) => ({
    display:'block',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight:'auto',
    padding: "10px",
    width: "200px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderColor: "transparent",
    backgroundColor: palette[theme].button,
    color: palette[theme].buttonText,
    cursor:'pointer',
    transition: 'all 0.4s linear',
     ':hover': {
      color: palette[theme].text,
      backgroundColor: palette[theme].accent
     }
})

export default style;