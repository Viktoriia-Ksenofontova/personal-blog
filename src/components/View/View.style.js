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

footer:{
    margin:'0 auto',
    padding:'20px',
    maxWidth: '1440px',
    display:'flex', 
    justifyContent: 'center'
}

}

export const makeViewStyle=(styleProps, variant)=>{
    const variantStyle=viewTheme[variant];

    return {
        ...variantStyle,
        ...styleProps
    }
}