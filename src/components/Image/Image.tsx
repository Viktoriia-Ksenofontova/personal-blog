import React from 'react';
import { ReactComponent as commentIcon } from '../../assets/images/comment.svg';
import { ReactComponent as createCommentIcon } from '../../assets/images/comment-with-a-pencil.svg';
import { ReactComponent as closeIcon } from '../../assets/images/closeIcon.svg';
import { ReactComponent as deleteIcon } from '../../assets/images/deleteIcon.svg';
import { ReactComponent as menuIcon } from '../../assets/images/menuIcon.svg';

import style from './Image.style';

interface IconProps {
   size?: string;
   iconColor?: string;
   iconStyles?: {[key:string]:string};
}

function CreateIconComponent(Icon: React.ElementType): React.FC<IconProps>{
  return function insideCreateIconComponent({size, iconColor, iconStyles}){
    
   const componentStyles=style(size, iconColor, iconStyles);
   return (
      <Icon 
         width={componentStyles.width}
         height={componentStyles.height}
         fill={componentStyles.fill}
    />
   );
};
}

export const MenuIcon = CreateIconComponent(menuIcon)
export const DeleteIcon = CreateIconComponent(deleteIcon);
export const CloseIcon = CreateIconComponent(closeIcon);
export const CreateCommentIcon = CreateIconComponent(createCommentIcon);
export const CommentIcon = CreateIconComponent(commentIcon);