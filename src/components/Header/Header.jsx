import React, {useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from "../../routing/routes";
import { Container, Text, ThemeSwitch } from '../index';
import palette from '../../assets/colors';
import ThemeContext from "../../context/ThemeContext";
import IconClose from '../../assets/images/closeIcon.svg';
import IconMenu from '../../assets/images/menuIcon.svg';
import {navStyle, navbarLinkRule, headerStyles, navWrapperStyles, closeNavWrapperStyles, buttonMenuStyles } from './Header.style';


export default function Header() {
  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
    
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
      <Container styles={{ display:'flex', position: 'relative', justifyContent: 'space-between'}}>
        <Text as="h1" styles={{ color: `${palette.light.accent}`, marginBottom:'0'}} variant="heading1">
        News & Events
        </Text>
        {userWidth<768 && 
          <button type="button" onClick={handleMenuButtonClick} className={css(buttonMenuStyles)}>
            {openMenu && <img src={IconClose} alt="button close"/>}
            {!openMenu && <img src={IconMenu} alt="button menu"/>}  
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
        
      </Container>
    </header>
  )
}