import React from 'react';
import CommandPrompt from '../components/CommandPrompt';
import portfolioData from '../data/portfolioData';

const Contact = () => (
  <div className="space-y-4">
    <CommandPrompt text="cat contact.txt" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(portfolioData.personal.contact).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2 font-mono">
          <span className="text-emerald-400">{key}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
