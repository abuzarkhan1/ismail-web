import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {children}
    </div>
  );
};