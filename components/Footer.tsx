
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto text-center text-gray-500">
        <p className="font-mono">&copy; {new Date().getFullYear()} Nemesis. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
