import React, { useState, useContext } from "react";
import { useFela } from 'react-fela';
import ThemeContext from "../../context/ThemeContext";
import {themeSwitchControl, themeSwitchToggle, themeSwitchMarker, themeSwitchTrack} from './ThemeSwitch.style';


export default function ThemeSwitch() {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { css } = useFela();

  const handleChange=()=>{
    setChecked(!checked);
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={css(themeSwitchControl)}>
      <label htmlFor="themeSwitchToggle" className={css(themeSwitchTrack)} data-check={checked}>
        <input type="checkbox"
          name="theme"
          id="themeSwitchToggle"
          aria-label="Change theme"
          className={css(themeSwitchToggle)}
          onChange={handleChange}
        /> 
      </label> 
      <span className={css(themeSwitchMarker)} data-check={checked}/>
     </div>
  )
}
