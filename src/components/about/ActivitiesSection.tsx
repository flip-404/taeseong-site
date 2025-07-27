import React from 'react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import { ACTIVITIES, AWARD } from '../../constants';

const ActivitiesSection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <SectionHeader title="Activities" />

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            교육 & 자격증
          </h3>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">수상</h3>
          <div className="space-y-4">
            {AWARD.map((activity, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1 items-start w-full">
                    <span className="text-sm font-medium text-gray-900">{activity.title}</span>
                    {activity.description && activity.description.length > 0 && (
                      <div className="flex flex-col gap-1">
                        {activity.description.map((desc, index) => (
                          <p className="text-sm text-gray-600" key={index}>
                            • {desc}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ActivitiesSection;
