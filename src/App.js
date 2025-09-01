import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}

        <Header />
        {/* Navigation */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <main className="bg-black p-6 rounded-lg border border-emerald-400/50">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
