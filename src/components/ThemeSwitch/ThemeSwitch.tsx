import React, { useState } from 'react';
import { useFela } from 'react-fela';
import useStore from '../../store/hooks';

import {
  themeSwitchControl,
  themeSwitchToggle,
  themeSwitchMarker,
  themeSwitchTrack,
} from './ThemeSwitch.style';

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const { css } = useFela();
  const { stateContext, setStateContext } = useStore();
  const { theme } = stateContext;

  const handleChange = () => {
    setChecked(!checked);
    setStateContext(
      theme === 'light'
        ? { store: stateContext.store, theme: 'dark' }
        : { store: stateContext.store, theme: 'light' },
    );
  };

  return (
    <div className={css(themeSwitchControl)}>
      <label htmlFor="themeSwitchToggle" className={css(themeSwitchTrack)} data-check={checked}>
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
