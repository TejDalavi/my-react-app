import React from 'react';
import CommandPrompt from '../components/CommandPrompt';
import portfolioData from '../data/portfolioData';

const Experience = () => (
  <div className="space-y-4">
    <CommandPrompt text="cat experience.log" />
    <div className="space-y-6">
      {portfolioData.experience.map((exp, index) => (
        <div key={index} className="border-l border-emerald-400 pl-4">
          <h3 className="text-emerald-400 font-mono">{exp.company}</h3>
          <p className="text-gray-400">{exp.position} | {exp.period}</p>
          <p className="mt-2 font-mono">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
