import React from 'react';
import PhilosophySection from '../../components/aboutV2/PhilosophySection';
import Header from '../../components/aboutV2/Header';
import WorkSection from '../../components/aboutV2/WorkSection';
import ProjectsSection from '../../components/aboutV2/ProjectsSection';
import ActivitiesSection from '../../components/aboutV2/ActivitiesSection';
import EducationSection from '../../components/aboutV2/EducationSection';
import Footer from '../../components/aboutV2/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 print:bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <PhilosophySection />
        <WorkSection />
        <ProjectsSection />
        <ActivitiesSection />
        <EducationSection />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
