import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { WorkExperience } from '../../types';
import { getTechBadgeColor } from '../../util';
import Card from './Card';
import SectionHeader from './SectionHeader';
import CompanyLogo from './CompanyLogo';
import DateDisplay from './DateDisplay';
import TechBadge from './TechBadge';
import AchievementList from './AchievementList';
import { WORK_EXPERIENCES } from '../../constants';

const WorkExperienceItem: React.FC<{ experience: WorkExperience }> = ({ experience }) => {
  const { companyName, position, team, duration, logo, projects = [] } = experience;

  return (
    <div className="mb-8 print:mb-6">
      <div className="flex">
        <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
          <CompanyLogo text={logo.text} bgColor={logo.bgColor} />
        </div>
        <Card className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
              <p className="text-blue-600 font-medium">{position}</p>
              {team && <p className="text-gray-600 text-sm">{team}</p>}
            </div>
            <DateDisplay date={duration} />
          </div>

          {projects.length > 0 && (
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className={index > 0 ? 'border-t border-gray-200 pt-6' : ''}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    {project.name}
                    {project.externalLink && (
                      <ExternalLink size={16} className="ml-2 text-gray-400" />
                    )}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <TechBadge
                      technologies={project.technologies}
                      colorClass={getTechBadgeColor(
                        `${experience.id}-${project.name.toLowerCase()}`
                      )}
                      className="mb-4"
                    />
                  )}

                  <AchievementList
                    achievements={project.achievements || []}
                    blogLink={project.blogLink}
                  />
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <SectionHeader title="Work Experience" icon={Briefcase} />
      {WORK_EXPERIENCES.map((experience) => (
        <WorkExperienceItem key={experience.id} experience={experience} />
      ))}
    </section>
  );
};

export default WorkSection;
