import { TViewProps } from './View.interface';

const viewTheme = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1440px',
  },

  header: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1440px',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
  },

  footer: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1440px',
    display: 'flex',
    justifyContent: 'center',
  },

  content: {
    display: 'flex',
  },
};

export const makeViewStyle = (
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
