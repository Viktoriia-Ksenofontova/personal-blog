const viewTheme={
container: {
    margin:'0 auto',
    padding:'20px',
    maxWidth: '1440px'
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