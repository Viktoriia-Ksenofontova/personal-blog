import React from 'react';
import { Link } from 'react-router-dom';
import { useFela } from 'react-fela';
import routes from "../../routing/routes";


export default function Header() {
  
  const { css } = useFela();

  return (
    <header className={css({
      display: 'flex',
      justifyContent: 'space-between',
      padding: "20px",
      borderBottomColor: 'grey',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px'
    })} >
      
      <h1 className="header_title">News & Events</h1>
      <nav className="navbar">
        <Link to={routes.home} className="navbarLink"> Home</Link>
        <Link to={routes.createPost} className="navbarLink"> Create_Post</Link>
      </nav>
   </header>
  )
}