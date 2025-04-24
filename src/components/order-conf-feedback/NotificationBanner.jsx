import React, { useState, useEffect } from 'react';
import './NotificationBanner.css'; // Make sure this file exists with proper styles

const NotificationBanner = ({ message, type = 'success', duration = 5000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Reset visibility when message changes
    setVisible(true);
    
    // Auto-dismiss after duration
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        setTimeout(onClose, 300); // Allow exit animation to play before removing
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  return (
    <div
      className={`notification-banner ${type} ${visible ? 'visible' : 'hidden'}`}
      aria-live="polite"
    >
      <div className="notification-content">
        <span className="notification-icon">
          {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ'}
        </span>
        <p>{message}</p>
      </div>
      <button className="close-button" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default NotificationBanner;