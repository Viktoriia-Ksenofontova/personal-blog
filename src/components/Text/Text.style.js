import textTheme from "./Text.theme";
import palette from '../../assets/colors';

export default function textStyles(styles, variant, theme) {
  const variantStyles = {...textTheme[variant]};
  return {
    color: palette[theme].text,
    ...variantStyles,
    ...styles
  }
}