import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from "../../routing/routes";
import { Container, Text, ThemeSwitch } from '../index';
import palette from '../../assets/colors';

const navbarLinkRule = () => ({
  marginRight: '20px',
  textDecoration: 'none',
  fontSize: '22px',
  fontWeight: 'bold',
  color: palette.light.text,
  transition: 'all 0.4s linear',
  ':hover': {
    color: palette.light.accent
  },
  ':focus': {
    color: palette.light.accent
  },
  '&.active': {
    color: palette.light.accent,
    textDecoration: 'underline'
  }
})

export default function Header() {
  const { css } = useFela();
  
  const headerStyles = {
    width: '100%',
    backgroundColor: palette.light.header,
    transition: 'all 200ms linear',
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
      if (offset) {
       setScrolled(true);
      } else { setScrolled(false)}
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  
  return (
    <header className={!scrolled? css(headerStyles ) : css({...headerStyles, position: 'sticky', top: 0})} >
      <Container styles={{ display:'flex', justifyContent: 'space-between'}}>
        <Text as="h1" styles={{ color: `${palette.light.accent}`, marginBottom:'0'}} variant="heading1">
        News & Events
        </Text>
        <nav className={css({display: 'flex', alignItems: 'center'})}>
          <NavLink to={routes.home} className={css(navbarLinkRule)} >
            Home
          </NavLink>
          <NavLink to={routes.createPost} className={css(navbarLinkRule)}>
            Create_Post
          </NavLink>
        </nav>
        <ThemeSwitch/>
      </Container>
    </header>
  )
}