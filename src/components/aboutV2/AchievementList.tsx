import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Achievement } from '../../types';
import { getAchievementColor } from '../../util';

interface AchievementListProps {
  achievements: Achievement[];
  blogLink?: string;
  className?: string;
}

const AchievementList: React.FC<AchievementListProps> = ({
  achievements,
  blogLink,
  className = '',
}) => {
  if (!achievements.length) return null;

  const renderAchievement = (achievement: Achievement, index: number) => {
    const { title, description, type, items } = achievement;
    const isHighlighted = type === 'business' && description;
    const colorClass = getAchievementColor(type);

    if (isHighlighted) {
      return (
        <div key={index} className="bg-yellow-50 p-4 rounded-xl print:bg-gray-50">
          <div className="flex items-start justify-between mb-2">
            <h5 className="font-semibold text-gray-900 flex-1">{title}</h5>
            {blogLink && (
              <a
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 flex items-center px-2 py-1 bg-white/80 hover:bg-white rounded-md text-xs font-medium text-gray-600 hover:text-blue-600 transition-all duration-200 print:hidden group"
                title="관련 블로그 포스트 보기">
                <ExternalLink
                  size={12}
                  className="mr-1 group-hover:scale-110 transition-transform"
                />
                포스트
              </a>
            )}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      );
    }

    return (
      <div key={index}>
        <h5 className="font-semibold text-gray-900 mb-2">{title}</h5>
        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start">
              <div className={`w-2 h-2 ${colorClass} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <div className={`space-y-4 ${className}`}>{achievements.map(renderAchievement)}</div>;
};

export default AchievementList;
