import React from 'react';
import { Link } from 'react-router-dom';
import routes from "../../routing/routes";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header_title">News & Events</h1>
      <nav className="navbar">
        <Link to={routes.home} className="navbarLink"> Home</Link>
        <Link to={routes.createPost} className="navbarLink"> Create_Post</Link>
      </nav>
   </header>
  )
}