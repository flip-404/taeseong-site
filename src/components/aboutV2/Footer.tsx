import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-blue-100 print:border-gray-300 mt-12 print:mt-8">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2025 {PERSONAL_INFO.name}. Frontend Developer Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
