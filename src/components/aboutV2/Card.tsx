import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-blue-100 p-6 print:shadow-none print:border-gray-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
