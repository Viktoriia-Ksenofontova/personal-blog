import textTheme from './Text.theme';
import palette from '../../assets/colors';

type TextStylesType = {
  styles: BaseObject;
  variant: 'heading1' | 'heading2' | 'heading3' | 'primary' | 'small';
  theme: 'dark' | 'light';
};

const textStyles = ({ styles, variant, theme }: TextStylesType) => {
  const variantStyles = textTheme[variant];
  return {
    color: palette[theme].text,
    ...variantStyles,
    ...styles,
  };
};

export default textStyles;
