import palette from '../../assets/colors';

const themeIcon = {
    iconSize:{
        large: 44,
        small: 20,
        default: 30,
    },
    color:{
        primary: palette.icon.primary,
        accent: palette.icon.accent
    }  
};

const getIconSize=(theme, size)=>{
    switch(size){
        case 'large':
            return theme.iconSize.large;
           
        case 'small':
            return theme.iconSize.small;
           
        default:
         return theme.iconSize.default;
    }
};

const getIconColor=(theme, colorName)=>{
    switch(colorName){
        case 'primary':
            return theme.color.primary;

        case 'accent':
            return theme.color.accent;

        default:
            return theme.color.primary;
    }
}
  
export default function style(size, iconColor, iconStyles) {
    let height;
    let width;
    let fill;

    if(iconColor){ 
        fill=getIconColor(themeIcon, iconColor);
    } else if(iconStyles?.fill){
        fill=iconStyles.fill;
    }

    if(size){
        height= getIconSize(themeIcon, size);
        width= getIconSize(themeIcon, size); 
        
    } else if (iconStyles?.height || iconStyles?.width){
        height= iconStyles.height || getIconSize(themeIcon, 'default');
        width= iconStyles.width || getIconSize(themeIcon, 'default');     
        
    } else {  
        height= getIconSize(themeIcon, 'default');
        width= getIconSize(themeIcon, 'default');
       
    }
    return({height, width, fill})
}