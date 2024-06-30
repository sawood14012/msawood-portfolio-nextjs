"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-lg mb-2 sm:mb-0">
          &copy; {currentYear}. All rights reserved.
        </div>
        <div className="text-lg">
          Made with <span className="text-red-500">&hearts;</span> by Sawood
        </div>
      </div>
    </footer>
  );
};

export default Footer;