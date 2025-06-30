import React from 'react';

const SkipLink = (): React.ReactElement => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipLink; 