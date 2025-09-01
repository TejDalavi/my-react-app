import React from 'react';

const CommandPrompt = ({ text }) => (
  <div className="flex items-center space-x-2 text-emerald-400 font-mono">
    <span>❯</span>
    <span>{text}</span>
  </div>
);

export default CommandPrompt;
