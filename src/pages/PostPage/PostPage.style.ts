import palette from '../../assets/colors';

export const labelRuleStyle = (theme:"dark" | "light") => ({
    display: 'flex',
    width: '100%',
    fontSize: '16px',
    fontWeight: '500',
    alignItems: 'top',
    textAlign: 'left',
    marginBottom: '20px',
    color: palette[theme].text,
})

export const textareaRuleStyle=(theme:"dark" | "light") =>({
    marginLeft: '20px',
    padding: '10px',
    width: '100%',
    border: 'none',
    borderRadius: '20px',
    boxShadow: `0px 0px 6px ${palette[theme].shadowColor}`,
    outline: 'none'
})

export const buttonDeleteRuleStyle=(theme:"dark" | "light")=>({
    width: '36px',
    height: '36px',
    padding:'2px',
    textAlign:'center',
    verticalAlign:'center',
    marginLeft: '50px',
    border: `1px solid ${palette[theme].accent}`,
    borderRadius: '50%',
    transition: 'all 0.4s linear',
    ':hover': { backgroundColor: palette[theme].accent },
    ':focus': { backgroundColor: palette[theme].accent }
})