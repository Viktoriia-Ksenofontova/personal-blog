import { TViewProps } from './View.interface';

const viewTheme = {
  container: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1440px',
  },

  header: {
    maxWidth: '1440px',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
  },

  footer: {
    maxWidth: '1440px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
  },

  content: {
    display: 'flex',
  },
};

const makeViewStyle = (
  styleProps: Omit<TViewProps, 'as' | 'variant' | 'viewStyle' | 'otherProps'>,
  variant: 'content' | 'footer' | 'header' | 'container',
  // variant: Pick<TViewProps, "variant">,
) => {
  const variantStyle = viewTheme[variant];
  const filteredStyleProps = Object.entries(styleProps).filter(el => el !== undefined);

  return {
    ...variantStyle,
    ...Object.fromEntries(filteredStyleProps),
  };
};

export default makeViewStyle;
