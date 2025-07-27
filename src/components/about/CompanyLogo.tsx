import React from 'react';

interface CompanyLogoProps {
  text: string;
  bgColor: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  image?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  text,
  bgColor,
  size = 'md',
  className = '',
  image,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-20 h-20 text-lg',
  };

  if (!image) {
    return null;
  }

  return (
    <div
      className={`${sizeClasses[size]} overflow-hidden bg-white rounded-xl flex items-center justify-center text-white font-bold sticky top-24 print:static ${className}`}>
      {image ? <img src={image} alt={text} className="w-full h-full object-contain" /> : text}
    </div>
  );
};

export default CompanyLogo;
