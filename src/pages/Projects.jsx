import React from 'react';
import CommandPrompt from '../components/CommandPrompt';
import portfolioData from '../data/portfolioData';

const Projects = () => (
  <div className="space-y-4">
    <CommandPrompt text="ls projects/" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="border border-emerald-400/50 p-4 rounded-md">
          <h3 className="text-emerald-400 font-mono">{project.name}</h3>
          <p className="mt-2 font-mono">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-emerald-400/10 text-emerald-400 rounded text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
