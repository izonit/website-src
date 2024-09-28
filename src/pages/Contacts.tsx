import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/styles/style.css';
import '@/styles/contacts.css';
import { faDiscord, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contacts() {
  return (
    <>
      <h1 className='title center'>Contacts</h1>
      <div className="container">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-icons">
            <a href="https://reddit.com/u/izonit" target="_blank">
              <FontAwesomeIcon icon={faReddit} size="2x" />
            </a>
            <a href="https://github.com/izonit" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://t.me/izonit2" target="_blank">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}