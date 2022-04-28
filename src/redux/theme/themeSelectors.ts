import { RootState } from '../store';
import { ThemeType } from '../types';

export const getTheme = (state: RootState): ThemeType => state.theme;
