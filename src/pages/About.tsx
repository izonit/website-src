import React from 'react';
import { Link } from 'react-router-dom';

import '@/styles/style.css';

/**
 * The About page that contains all the information about the application
 * 
 * @returns The "about" page JSX element
 */
export default function About() {
  return (
    <>
      <div className="center">
        <h1 className="title">About</h1>
      </div>
      <h2>Nothing much about me. Just keep in mind that I am a beginner.</h2>
      <h3>Oh, and right <Link to="/contacts" className='link'>here</Link> you can contact me!</h3>
    </>
  );
}
