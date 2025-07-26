import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = '' }) => {
  return (
    <h2 className={`text-2xl font-bold text-gray-900 mb-8 flex items-center ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeader;
