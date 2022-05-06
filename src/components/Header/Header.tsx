import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFela } from 'react-fela';
import routes from '../../routing/routes';
import { View, Text, ThemeSwitch } from '../index';
import { CloseIcon, MenuIcon } from '../Image';

import { useAppSelector } from '../../redux/hooks';
import { getTheme } from '../../redux/theme/themeSelectors';
import '../../translations/i18n';

import {
  logoStyles,
  navStyle,
  navbarLinkRule,
  headerStyles,
  navWrapperStyles,
  closeNavWrapperStyles,
  buttonMenuStyles,
} from './Header.style';

type Props = {
  language: string;
  handleChangeLanguage: any;
};

const Header: React.FC<Props> = ({ language, handleChangeLanguage }) => {
  const { css } = useFela();
  const theme = useAppSelector(getTheme);
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [userWidth, setUserWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setUserWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleMenuButtonClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    if (userWidth < 768 && openMenu) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={
        !scrolled
          ? css(headerStyles)
          : css({ ...headerStyles(), position: 'sticky', top: 0 })
      }
    >
      <View variant="container">
        <View
          variant="header"
          padding="20px"
          justifyContent="space-between"
          overflow={!openMenu ? 'hidden' : undefined}
        >
          <Text
            as="h1"
            variant="heading1"
            styles={
              userWidth < 440
                ? { ...logoStyles(), fontSize: '28px' }
                : logoStyles()
            }
          >
            {t('headerTitle')}
            {/* News & Events */}
          </Text>
          {userWidth < 768 && (
            <button
              type="button"
              onClick={handleMenuButtonClick}
              className={css(buttonMenuStyles)}
            >
              {openMenu && <CloseIcon size="large" />}
              {!openMenu && <MenuIcon size="large" />}
            </button>
          )}

          <div
            className={
              openMenu
                ? css(navWrapperStyles(theme))
                : css(closeNavWrapperStyles)
            }
          >
            <nav className={css(navStyle)}>
              <NavLink
                to={routes.home}
                className={css(navbarLinkRule)}
                onClick={handleLinkClick}
              >
                {t('navLinkHome')}
                {/* Home */}
              </NavLink>
              <NavLink
                to={routes.createPost}
                className={css(navbarLinkRule)}
                onClick={handleLinkClick}
              >
                {t('navLinkCreatePost')}
                {/* Create_Post */}
              </NavLink>
            </nav>
            <ThemeSwitch />
            <select
              value={language}
              name="language"
              onChange={handleChangeLanguage}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                marginLeft: 'auto',
                height: '32px',
              }}
            >
              <option value="uk">uk</option>
              <option value="en">en</option>
            </select>
          </div>
        </View>
      </View>
    </header>
  );
};

export default Header;
