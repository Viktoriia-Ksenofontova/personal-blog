import palette from '../../assets/colors';

const style = (theme: 'dark' | 'light') => ({
  minHeight: 'calc(100vh - 88px)',
  backgroundColor: palette[theme].background,
});

export default style;
