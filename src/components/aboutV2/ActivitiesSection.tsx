import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import { ACTIVITIES, BOOK_STUDIES } from '../../constants';

const ActivitiesSection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <SectionHeader title="Activities" icon={Award} />

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">교육 & 멘토링</h3>
          <div className="space-y-3">
            {ACTIVITIES.map((activity, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{activity.title}</span>
                <span className="text-xs text-gray-500">{activity.date}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BookOpen size={20} className="mr-2 text-blue-600" />북 스터디
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            {BOOK_STUDIES.map((book, index) => (
              <div key={index}>• {book}</div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ActivitiesSection;
