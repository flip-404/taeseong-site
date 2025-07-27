import React from 'react';

interface TechBadgeProps {
  technologies: string[];
  colorClass?: string;
  className?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({
  technologies,
  colorClass = 'bg-gray-100 text-gray-800',
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className={`px-3 py-1 ${colorClass} rounded-full text-xs font-medium print:bg-gray-200`}>
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechBadge;
