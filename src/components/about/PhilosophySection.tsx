import React from 'react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import { PHILOSOPHY_ITEMS } from '../../constants';

const PhilosophySection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <div className="bg-transparent">
        <SectionHeader title="Philosophy" />
        {PHILOSOPHY_ITEMS.map((item, index) => (
          <div key={index} className={`rounded-xl`}>
            {item.hasTitle && (
              <h3 className={`font-semibold text-gray-900 ${index === 0 ? '' : 'mt-4'}`}>
                {item.title}
              </h3>
            )}
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
