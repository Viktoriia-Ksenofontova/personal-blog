const viewTheme={
container: {
    margin:'0 auto',
    padding:'20px',
    maxWidth: '1440px'
},

header:{
    margin:'0 auto',
    padding:'20px',
    maxWidth: '1440px',
    display:'flex', 
    position: 'relative', 
    justifyContent: 'space-between'
},

list: {
    padding: '0',
    margin: '0 0 10px 0',
    listStyle: "none",
}
}

export const makeViewStyle=(styleProps, variant)=>{
    const variantStyle=viewTheme[variant];

    return {
        ...variantStyle,
        ...styleProps
    }
}