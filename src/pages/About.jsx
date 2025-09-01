import React from 'react';
import CommandPrompt from '../components/CommandPrompt';
import TypewriterText from '../components/TypewriterText';
import portfolioData from '../data/portfolioData';

const About = () => (
  <div className="space-y-4">
    <CommandPrompt text="portfolio.exe" />
    <CommandPrompt text="whoami" />
    <TypewriterText text={portfolioData.personal.about} />
  </div>
);

export default About;
