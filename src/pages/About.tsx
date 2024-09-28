import React from 'react';
import { Link } from 'react-router-dom';

import '@/styles/style.css'

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
      <h2>I am Mizorint (but you know this already), and my real name is Daniil. And I am an amateur web developer! I like writing ugly code in TypeScript.</h2>
      <h2>Currently, I am not succeeding much in my coding journey. But that will certainly be fixed.</h2>
      <h3>Oh, and right <Link to="/contacts" className='link'>here</Link> you can contact me!</h3>
    </>
  );
}
