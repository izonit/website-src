import React from 'react';
import { Link } from 'react-router-dom';

import '@/styles/style.css';
import '@/styles/typingEffect.css';

/**
 * The home page that is the main landing page
 * 
 * @returns The "main" page JSX element
 */
export default function Home() {
  return (
    <>
      <div className="wrapper">
        <h1 className="title typing-effect">Hello and welcome.</h1>
      </div>
      <h2 className='subtitle'>I am Mizorint 🌞</h2>
      <h3>...and this is my website!</h3>
      <h3>Let's go to my <Link to="/about" className='link'>About me</Link>, shall we?</h3>
    </>
  );
}