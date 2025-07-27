import React from 'react';
import { GraduationCap } from 'lucide-react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import DateDisplay from './DateDisplay';
import { EDUCATION } from '../../constants';

const EducationSection: React.FC = () => {
  const { school, major, duration } = EDUCATION;

  return (
    <section className="mb-8 print:mb-6">
      <SectionHeader title="Education" icon={GraduationCap} />

      <Card>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{school}</h3>
            <p className="text-gray-600">{major}</p>
          </div>
          <DateDisplay date={duration} />
        </div>
      </Card>
    </section>
  );
};

export default EducationSection;
