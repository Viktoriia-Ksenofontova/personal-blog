import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from '../../routing/routes';
import { View, Text, ThemeSwitch } from '../index';
import { CloseIcon, MenuIcon } from '../Image';
import {
  logoStyles,
  navStyle,
  navbarLinkRule,
  headerStyles,
  navWrapperStyles,
  closeNavWrapperStyles,
  buttonMenuStyles,
} from './Header.style';
import useStore from '../../store/hooks';

const Header: React.FC = () => {
  const { css } = useFela();

  const { stateContext } = useStore();
  const { theme } = stateContext;

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [userWidth, setUserWidth] = useState(0);

  // let window: Window;

  const handleMenuButtonClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    if (userWidth < 768 && openMenu) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setUserWidth(window.innerWidth);

    const handleResize = () => {
      setUserWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={
        !scrolled ? css(headerStyles) : css({ ...headerStyles(), position: 'sticky', top: 0 })
      }
    >
      <View
        variant="header"
        justifyContent="space-between"
        overflow={!openMenu ? 'hidden' : 'auto'}
      >
        <Text
          as="h1"
          variant="heading1"
          styles={userWidth < 440 ? { ...logoStyles(), fontSize: '28px' } : logoStyles()}
        >
          News & Events
        </Text>
        {userWidth < 768 && (
          <button type="button" onClick={handleMenuButtonClick} className={css(buttonMenuStyles)}>
            {openMenu && <CloseIcon size="large" />}
            {!openMenu && <MenuIcon size="large" />}
          </button>
        )}

        <div className={openMenu ? css(navWrapperStyles(theme)) : css(closeNavWrapperStyles)}>
          <nav className={css(navStyle)}>
            <NavLink to={routes.home} className={css(navbarLinkRule)} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink
              to={routes.createPost}
              className={css(navbarLinkRule)}
              onClick={handleLinkClick}
            >
              Create_Post
            </NavLink>
          </nav>
          <ThemeSwitch />
        </div>
      </View>
    </header>
  );
};

export default Header;
