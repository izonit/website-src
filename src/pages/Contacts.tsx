import { faDiscord, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import Modal from '@/components/Modal';

import '@/styles/contacts.css';
import '@/styles/style.css';

/**
 * The Contacts page - describes my contact info.
 *
 * @returns the "Contacts" JSX element.
 */

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h1 className='title center'>Contacts</h1>
      <div className="container">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Here's a list of my contacts.</h2>
          </div>
          <div className="contact-icons">
            <a onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faDiscord} size="2x" /> {/* Opens Modal */}
            </a>
            <a href="https://github.com/izonit" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://t.me/mizorint" target="_blank">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      {/* Modal for Telegram */}
      <Modal show={showModal} onClose={toggleModal} />
    </>
  );
}