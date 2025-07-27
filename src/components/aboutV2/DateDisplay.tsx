import React from 'react';
import { Calendar } from 'lucide-react';

interface DateDisplayProps {
  date: string;
  className?: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, className = '' }) => {
  return (
    <div className={`text-right text-sm text-gray-500 ${className}`}>
      <div className="flex items-center">
        <Calendar size={16} className="mr-1" />
        {date}
      </div>
    </div>
  );
};

export default DateDisplay;
