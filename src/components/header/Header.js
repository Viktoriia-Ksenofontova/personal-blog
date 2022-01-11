import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from "../../routing/routes";

const navbarLinkRule = () => ({
  marginRight: '20px',
  textDecoration: 'none',
  fontSize: '22px',
  fontWeight: 'bold',
  color: 'black',
  ':hover': {
    color: 'yellowgreen'
  },
  ':focus': {
    color: 'yellowgreen'
  },
  '&.active': {
    color: 'yellowgreen',
    textDecoration: 'underline'
  }
})

export default function Header() {
  const { css } = useFela();

  return (
    <header className={css({
      display: 'flex',
      justifyContent: 'space-between',
      padding: "20px",
      backgroundColor: 'grey'
    })} >
      
      <h1 className={css({
        margin: 0,
        color: 'yellowgreen'
      })}>
        News & Events
      </h1>
      <nav className={css({display: 'flex', alignItems: 'center'})}>
        <NavLink to={routes.home} className={css(navbarLinkRule)} >
          Home
        </NavLink>
        <NavLink to={routes.createPost} className={css(navbarLinkRule)}>
          Create_Post
        </NavLink>
      </nav>
   </header>
  )
}