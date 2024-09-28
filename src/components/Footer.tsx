import React from 'react';
import '@/styles/footer.css';
import '@/styles/style.css';

/**
 * The website footer
 * 
 * @returns The footer JSX element
 */
export default function Footer() {
  return (
    <>
      <div className="footer">
        <h4>Made with 💖 by <a href='https://github.com/izonit' target='_blank' className='link'>Mizorint</a></h4>
      </div>
    </>
  );
}