import React from 'react';
import { Terminal, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', icon: Terminal, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-12">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveSection(id)}
          className={`px-6 py-2 border rounded flex items-center space-x-2 font-mono
            ${activeSection === id 
              ? 'border-emerald-400 text-emerald-400 bg-emerald-400/10' 
              : 'border-emerald-400/50 text-emerald-400/50 hover:border-emerald-400 hover:text-emerald-400'}`}
        >
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
