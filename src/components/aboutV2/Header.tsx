import React from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { name, position, email, github, blog } = PERSONAL_INFO;

  const navigationItems = [
    { href: `mailto:${email}`, icon: Mail, label: 'Email' },
    { href: github, icon: Github, label: 'Github' },
    { href: blog, icon: ExternalLink, label: 'Blog' },
  ];

  return (
    <header
      className={`bg-white/80 backdrop-blur-sm border-b border-blue-100 print:border-gray-300 print:bg-white sticky top-0 z-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-lg text-blue-600 font-medium">{position}</p>
          </div>
          <div className="flex items-center space-x-6 print:space-x-4">
            {navigationItems.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Icon size={20} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
