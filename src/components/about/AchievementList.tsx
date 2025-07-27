import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Achievement } from '../../types';
import { getAchievementColor } from '../../util';
import { Link } from 'gatsby';

interface AchievementListProps {
  achievements: Achievement[];
  className?: string;
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements, className = '' }) => {
  if (!achievements.length) return null;

  const renderAchievement = (achievement: Achievement, index: number) => {
    const { title, description, type, items } = achievement;
    const isHighlighted = type === 'business' && description;
    const colorClass = getAchievementColor(type);

    return (
      <div key={index}>
        <h5 className="font-semibold text-gray-900 mb-2">{title}</h5>
        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center">
              <div className={`w-2 h-2 ${colorClass} rounded-full ml-2 mr-2 flex-shrink-0`}></div>
              {item.title}
              {item.link && (
                <Link to={item.link} target="_blank">
                  <span className="ml-2 flex items-center bg-amber-300 gap-1 px-1 rounded-md text-xs text-gray-700">
                    <ExternalLink size={12} />
                    {item.linkDescription}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <div className={`space-y-4 ${className}`}>{achievements.map(renderAchievement)}</div>;
};

export default AchievementList;
