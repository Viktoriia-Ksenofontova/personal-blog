import textTheme from "./Text.theme";

export default function textStyles(styles, variant) {
  const variantStyles = textTheme[variant];
  return {
    ...variantStyles,
    ...styles
  }
}