import palette from '../../assets/colors';

const style = ({ theme }) => ({
    marginBottom: '10px',
    padding: "10px",
    width: "200px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderColor: "transparent",
    backgroundColor: palette[theme].button,
    color: palette[theme].buttonText,
     ':hover': {
      color: palette[theme].text,
      backgroundColor: palette[theme].accent
     }

})


export default style;