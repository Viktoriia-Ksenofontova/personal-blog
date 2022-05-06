import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { useAppDispatch } from '../../redux/hooks';

import { toggleTheme } from '../../redux/theme/themeActions';

import {
  themeSwitchControl,
  themeSwitchToggle,
  themeSwitchMarker,
  themeSwitchTrack,
} from './ThemeSwitch.style';

const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  const { css } = useFela();

  const handleChange = () => {
    setChecked(!checked);
    dispatch(toggleTheme());
  };

  return (
    <div className={css(themeSwitchControl)}>
      <label
        htmlFor="themeSwitchToggle"
        className={css(themeSwitchTrack)}
        data-check={checked}
      >
        <input
          type="checkbox"
          name="theme"
          id="themeSwitchToggle"
          aria-label="Change theme"
          className={css(themeSwitchToggle)}
          onChange={handleChange}
        />
      </label>
      <span className={css(themeSwitchMarker)} data-check={checked} />
    </div>
  );
};

export default ThemeSwitch;
