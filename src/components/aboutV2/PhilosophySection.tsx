import React from 'react';
import { User } from 'lucide-react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import { PHILOSOPHY_ITEMS } from '../../constants';

const PhilosophySection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <Card className="p-8">
        <SectionHeader title="Philosophy" icon={User} />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {PHILOSOPHY_ITEMS.slice(0, 2).map((item, index) => (
              <div key={index} className={`p-4 ${item.bgColor} rounded-xl print:bg-gray-50`}>
                {item.hasTitle && (
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {PHILOSOPHY_ITEMS.slice(2, 4).map((item, index) => (
              <div key={index} className={`p-4 ${item.bgColor} rounded-xl print:bg-gray-50`}>
                {item.hasTitle && (
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default PhilosophySection;
