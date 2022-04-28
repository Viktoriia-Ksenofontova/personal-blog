import { toggleTheme } from './themeActions';
import { ReducerBuilder } from '../posts/reducerBuilder';
import { ThemeType } from '../types';

const initialThemeState = 'light';

const theme = ReducerBuilder.new<ThemeType>(initialThemeState)
  .addCase(toggleTheme, state => (state === 'light' ? 'dark' : 'light'))
  .build();

export default theme;
