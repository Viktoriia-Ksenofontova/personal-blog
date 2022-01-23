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

const getIconSize=(size:string)=>{
    switch(size){
        case 'large':
            return themeIcon.iconSize.large;
           
        case 'small':
            return themeIcon.iconSize.small;
           
        default:
         return themeIcon.iconSize.default;
    }
};

const getIconColor=(colorName:string)=>{
    switch(colorName){
        case 'primary':
            return themeIcon.color.primary;

        case 'accent':
            return themeIcon.color.accent;

        default:
            return themeIcon.color.primary;
    }
}
  
export default function style(size:string, iconColor:string, iconStyles:{[key:string]:string}) {
    let height;
    let width;
    let fill;

    if(iconColor){ 
        fill=getIconColor(iconColor);
    } else if(iconStyles?.fill){
        fill=iconStyles.fill;
    }

    if(size){
        height= getIconSize(size);
        width= getIconSize(size); 
        
    } else if (iconStyles?.height || iconStyles?.width){
        height= iconStyles.height || getIconSize('default');
        width= iconStyles.width || getIconSize('default');     
        
    } else {  
        height= getIconSize('default');
        width= getIconSize('default');
       
    }
    return({height, width, fill})
}