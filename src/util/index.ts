import { Achievement } from '../types';

export const getAchievementColor = (type: Achievement['type']): string => {
  const colorMap = {
    technical: 'bg-blue-600',
    business: 'bg-green-600',
    team: 'bg-purple-600',
  };
  return colorMap[type];
};

export const getTechBadgeColor = (companyId: string): string => {
  const colorMap: Record<string, string> = {
    'tidesquare-privia': 'bg-blue-100 text-blue-800',
    'tidesquare-kyte': 'bg-teal-100 text-teal-800',
    pozalabs: 'bg-purple-100 text-purple-800',
    default: 'bg-gray-100 text-gray-800',
  };
  return colorMap[companyId] || colorMap.default;
};

export const getPrintStyles = (): string => {
  return 'print:bg-white print:shadow-none print:border-gray-300 print:static print:bg-gray-50 print:bg-gray-200 print:text-gray-600 print:hidden print:mb-8 print:mb-6 print:w-16 print:mr-4 print:mt-8';
};
