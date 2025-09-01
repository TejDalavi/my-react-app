import React from 'react';
import CommandPrompt from '../components/CommandPrompt';
import portfolioData from '../data/portfolioData';
import { Code } from 'lucide-react';

const Skills = () => (
  <div className="space-y-4">
    <CommandPrompt text="ls skills/" />
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {portfolioData.skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Code size={16} className="text-emerald-400" />
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
