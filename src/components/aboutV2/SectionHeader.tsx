import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon, className = '' }) => {
  return (
    <h2 className={`text-2xl font-bold text-gray-900 mb-8 flex items-center ${className}`}>
      <Icon className="mr-3 text-blue-600" size={24} />
      {title}
    </h2>
  );
};

export default SectionHeader;
