import { RootState } from '../store';
import { ThemeType } from '..';

export const getTheme = (state: RootState): ThemeType => state.theme;
