import React from 'react';

const Loader = ({ error, errorMessage = "Failed to load content. Please try again." }) => {
  if (error) {
    return (
      <div id="loader-error-container">
        <div id="error-icon">⚠️</div>
        <p id="error-message">{errorMessage}</p>
        <button id="retry-button" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div id="loader-container" role="status" aria-live="polite">
      <div id="spinner"></div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
};

export default Loader;