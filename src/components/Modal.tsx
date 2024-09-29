import React from 'react';
import '@/styles/modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

/**
 * The Modal component that displays the Discord contact info
 * @returns The modal JSX element
 */
export default function Modal({ show, onClose }: ModalProps) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Discord Contact Info</h2>
        <p><strong>@mizorint</strong> is my nickname. Feel free to DM.</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}
