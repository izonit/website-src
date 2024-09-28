import React from 'react';
import { Link } from 'react-router-dom';

import '@/styles/header.css';
import icon from '#assets/favicon.ico';

/**
 * The header component that displays the navbar
 * 
 * @returns The header JSX element
 */
export default function Header() {
  return (
    <>
    <div className="navbar-container">
      <nav className="navbar">
        <div className='navbar-container'>
          <img src={icon} alt="React logo" className='logo' />
          <ul className='nav-links'>
            <li>
              <Link to="/" className='link2'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='link2'>About</Link>
            </li>
            <li>
              <Link to="/contacts" className='link2'>Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
}