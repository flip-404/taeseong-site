import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { PersonalProject } from '../../types';
import Card from './Card';
import SectionHeader from './SectionHeader';
import CompanyLogo from './CompanyLogo';
import DateDisplay from './DateDisplay';
import TechBadge from './TechBadge';
import { PERSONAL_PROJECTS } from '../../constants';

const ProjectItem: React.FC<{ project: PersonalProject }> = ({ project }) => {
  const { name, date, description, tech, logo, achievement, link } = project;

  return (
    <div className="flex">
      <div className="w-20 flex-shrink-0 mr-6 print:w-16 print:mr-4">
        <CompanyLogo
          text={logo}
          bgColor="bg-gradient-to-br from-gray-600 to-gray-800"
          className="text-xs"
        />
      </div>
      <Card className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors print:text-gray-600">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            {achievement && (
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-2 print:bg-gray-200">
                {achievement}
              </div>
            )}
          </div>
          <DateDisplay date={date} />
        </div>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>
        <TechBadge technologies={tech} />
      </Card>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="mb-12 print:mb-8">
      <SectionHeader title="Projects" icon={Code} />
      <div className="grid gap-6">
        {PERSONAL_PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
