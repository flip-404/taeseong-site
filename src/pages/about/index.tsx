import React from 'react';
import PhilosophySection from '../../components/about/PhilosophySection';
import Header from '../../components/about/Header';
import WorkSection from '../../components/about/WorkSection';
import ProjectsSection from '../../components/about/ProjectsSection';
import ActivitiesSection from '../../components/about/ActivitiesSection';
import EducationSection from '../../components/about/EducationSection';
import Footer from '../../components/about/Footer';

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
