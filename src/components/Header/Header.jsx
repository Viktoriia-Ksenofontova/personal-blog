import React, {useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from "../../routing/routes";
import { View, Text, ThemeSwitch } from '../index';
import { CloseIcon, MenuIcon } from '../Image';
import {logoStyles, navStyle, navbarLinkRule, headerStyles, navWrapperStyles, closeNavWrapperStyles, buttonMenuStyles } from './Header.style';
import useStore from '../../store/hooks';

export default function Header() {
  const { css } = useFela();

  const { stateContext } = useStore();
  const { theme } = stateContext;
     
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu]=useState(false);
  const [userWidth, setUserWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setUserWidth(window.innerWidth)
  };

  const handleScroll = () => {
    const offset = window.scrollY;
      if (offset) {
       setScrolled(true);
      } else { setScrolled(false)}
  }

  const handleMenuButtonClick=()=>{
    setOpenMenu(!openMenu);
  }

  const handleNavlinkClick=()=>{
    if (userWidth<768 && openMenu){
      setOpenMenu(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

   
  return (
    <header className={!scrolled? css(headerStyles) : css({...headerStyles(), position: 'sticky', top: 0})} >
      <View variant='header' viewStyle={!openMenu && { overflow:'hidden'}}>
        <Text as="h1" styles={userWidth<440? {...logoStyles(),fontSize:'28px'}: logoStyles() } variant="heading1">
        News & Events
        </Text>
        {userWidth<768 && 
          <button type="button" onClick={handleMenuButtonClick} className={css(buttonMenuStyles)}>
            {openMenu && <CloseIcon size="large"/>}
            {!openMenu && <MenuIcon size="large"/>}  
          </button>
        }
        
        <div className={ openMenu ?
            css(navWrapperStyles(theme)) 
          : css(closeNavWrapperStyles)
          }
        >
          <nav className={css(navStyle)}>
          <NavLink to={routes.home} className={css(navbarLinkRule)} onClick={handleNavlinkClick}>
            Home
          </NavLink>
          <NavLink to={routes.createPost} className={css(navbarLinkRule)} onClick={handleNavlinkClick}>
            Create_Post
          </NavLink>
        </nav>
        <ThemeSwitch/>
        </div>
      </View>
    </header>
  )
}